    import {  collectionGroup, doc, getDocs, getFirestore, increment, limit, orderBy, query, where, writeBatch} from "firebase/firestore";
import { app } from "../../firebaseConfig/firebaseConfig";



    
    
    
    
    
    const db = getFirestore(app);
export const getDueWords = async (userId, TotalLimit = 10) => {
  const q = query(
    collectionGroup(db, "words"), 
    where("userId", "==", userId),
    where('next_review', '<=', new Date()),
    orderBy('next_review', 'asc'),
    limit(TotalLimit)
  );
  const snapshot = await getDocs(q);

  const words = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
console.log(words);
  return words;

}


export const getNewWords = async (userId, TotalLimit = 5) => {
  const q = query(
    collectionGroup(db, "words"), 
    where("userId", "==", userId),
    where('total_reviews', '==', 0),
    limit(TotalLimit)
  );
  const snapshot = await getDocs(q);

  const words = snapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
  
  return words;
}

export const processCorrectAnswer = async (userId, wordId, word, answerQuality = 4) => {
 
  const updatedWord = {
    ...word,
    repetitions: word.repetitions + 1,
    total_reviews: word.total_reviews + 1,
    last_review: new Date(),
  };
  

  const { interval, next_review } = calculateNextInterval(updatedWord);
  updatedWord.interval = interval;
  updatedWord.next_review = next_review;
  

  updatedWord.ease_factor = updateEaseFactor(word.ease_factor, answerQuality);

  const experienceGained = calculateExperience(updatedWord);

  const batch = writeBatch(db);

  const wordRef = doc(db, `users/${userId}/categories/${word.categoryName}/words`, wordId);
  batch.update(wordRef, updatedWord);
  

  const userRef = doc(db, 'users', userId);
  batch.update(userRef, {
    totalExperience: increment(experienceGained),
    lastActivity: new Date()
  });
  
  await batch.commit();

  return {
    success: true,
    experienceGained,
    nextReview: next_review,
    newLevel: updatedWord.repetitions
  };

}

export const processIncorrectAnswer = async (userId, wordId, word) => {
  const updatedWord = {
    ...word,
    repetitions: 0, 
    total_reviews: word.total_reviews + 1,
    last_review: new Date(),
    interval: 1,
    next_review: new Date(Date.now() + 24 * 60 * 60 * 1000), 
    ease_factor: Math.max(1.3, word.ease_factor - 0.2) 
  };

  const experienceGained = 2; 

  const batch = writeBatch(db);

  const wordRef = doc(db, `users/${userId}/categories/${word.categoryName}/words`, wordId);
  batch.update(wordRef, updatedWord);
  

  const userRef = doc(db, 'users', userId);
  batch.update(userRef, {
    totalExperience: increment(experienceGained),
    lastActivity: new Date()
  });
  
  await batch.commit();
  


  return {
    success: true,
    experienceGained,
    nextReview: updatedWord.next_review,
    resetProgress: true,
    message: "Не беда! Слово будет показано снова завтра."
  };
}

const calculateExperience = (word, streakBonus = false) => {
  let exp = 10; 
  
  if (word.repetitions === 0) exp += 5;
  if (streakBonus) exp += 3; 
  if (word.ease_factor < 2.0) exp += 5; 
  
  return exp;
}


const updateEaseFactor = (currentFactor, quality) => {

  const newFactor = currentFactor + (0.1 - (5 - quality) * (0.08 + (5 - quality) * 0.02));
  return Math.max(1.3, newFactor);
}

const calculateNextInterval = (word) => {
  let newInterval;
  
  if (word.repetitions === 0) {
    newInterval = 1; 
  } else if (word.repetitions === 1) {
    newInterval = 6;
  } else {
    
    newInterval = Math.round(word.interval * word.ease_factor);
  }
  
  return {
    interval: newInterval,
    next_review: new Date(Date.now() + newInterval * 24 * 60 * 60 * 1000)
  };
}

