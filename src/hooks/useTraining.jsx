import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore";
import { useAuth } from "../context/auth/useAuth";
import { getAllWords } from "../services/training/getAllFiles";
import { app } from "../firebaseConfig/firebaseConfig";
import { useEffect, useState } from "react";
import { getDueWords, processCorrectAnswer, processIncorrectAnswer } from "../services/training/training";



export const  useTraining = ( )=>{
  const user = useAuth();
  const [dataWord, setDataWord] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [userAnswerWords, setUserAnswerWords] = useState([]);


  useEffect(() => {
    const fetchWordsTraining = async () => {
      if (user?.userId) {
        const data = await getDueWords(user.userId);
        setDataWord(data);
      }
    };
    fetchWordsTraining();
  }, [user]);

  const currentWord = dataWord[currentIndex];

  const handleComparisonWords = async (e) => {
    e.preventDefault();
  };

  const handleNextWords = async () => {
    if (!currentWord || !userAnswer.trim()) return;

    const isCorrect =
      userAnswer.trim().toLowerCase() === currentWord.translation.toLowerCase();

    if (isCorrect) {
      setUserAnswerWords([...userAnswerWords, currentWord.translation]);
      await processCorrectAnswer(user.userId, currentWord.id, currentWord);
      console.log(currentIndex);
    } else {
      await processIncorrectAnswer(user.userId, currentWord.id, currentWord);
    }
    if (currentIndex < dataWord.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer("");
    } else {
      setDataWord([]);
      setCurrentIndex(0);
      setUserAnswer("");
    }
  };



  return {userAnswer ,currentWord,handleComparisonWords,handleNextWords,setUserAnswer}
}




