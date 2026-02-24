import { useAuth } from "../context/auth/useAuth";
import { useEffect, useState } from "react";
import {
  getDueWords,
  processCorrectAnswer,
  processIncorrectAnswer,
} from "../services/training/training";
import { toast } from "react-toastify";

export const useTraining = () => {
  const { user } = useAuth() || {};
  const [dataWord, setDataWord] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [userAnswerWords, setUserAnswerWords] = useState([]);
  const [userAnswerWordsWrong, setUserAnswerWordsWrong] = useState([]);

  const dataLength = dataWord.length;

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

  const handleComparisonWords = async (e, openModal) => {
    e.preventDefault();
    
    if (!currentWord || !userAnswer.trim()) return;

    const isCorrect =
      userAnswer.trim().toLowerCase() === currentWord.translation.toLowerCase();

    let updatedCorrectWords = [...userAnswerWords];
    let updatedWrongWords = [...userAnswerWordsWrong];

    if (isCorrect) {
      await processCorrectAnswer(user.userId, currentWord.id, currentWord);
      updatedCorrectWords = [...userAnswerWords, currentWord.translation];
      setUserAnswerWords(updatedCorrectWords);
    } else {
      await processIncorrectAnswer(user.userId, currentWord.id, currentWord);
      updatedWrongWords = [...userAnswerWordsWrong, currentWord.translation];
      setUserAnswerWordsWrong(updatedWrongWords);
    }

    openModal({ norm: updatedCorrectWords, wrong: updatedWrongWords });

    handleNextWord();
  };

  const handleNextWords = async () => {
    if (!currentWord || !userAnswer.trim()) return;

    const isCorrect =
      userAnswer.trim().toLowerCase() === currentWord.translation.toLowerCase();

    if (isCorrect) {
      await processCorrectAnswer(user.userId, currentWord.id, currentWord);
      setUserAnswerWords([...userAnswerWords, currentWord.translation]);
    } else {
      await processIncorrectAnswer(user.userId, currentWord.id, currentWord);
      setUserAnswerWordsWrong([...userAnswerWordsWrong, currentWord.translation]);
    }
    
    handleNextWord();
  };

  const handleNextWord = () => {
    if (currentIndex < dataWord.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setUserAnswer("");
    } else {
      setDataWord([]);
      setCurrentIndex(0);
      setUserAnswer("");
    }
  };

  return {
    userAnswer,
    userAnswerWords,
    dataLength,
    currentIndex,
    currentWord,
    handleComparisonWords,
    handleNextWords,
    setUserAnswer,
  };
};
