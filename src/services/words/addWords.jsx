import { addDoc, collection, doc, getFirestore } from "firebase/firestore";
import { app } from "../../firebaseConfig/firebaseConfig";

const db = getFirestore(app);

export const addWord = async (userId, categoryName, wordObj) => {
 try {
   const categoryDocRef = doc(db, "users", userId, "categories", categoryName);

  const wordsCollectionRef = collection(categoryDocRef, "words");

await addDoc(wordsCollectionRef, wordObj);

 } catch (error) {
     if (error.code === 'permission-denied') {
      throw new Error('No right to add words');
    }
    
 }

};
