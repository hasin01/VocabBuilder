import React, { useEffect, useState } from "react";
import InputTraining from "../InputTraining/InputTraining";
import Level from "../Level/Level";
import LanguageIcon from "../LanguageIcon/LanguageIcon";
import { Button } from "../Button/Button";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useAuth } from "../../context/auth/useAuth";
import {
  getDueWords,
  processIncorrectAnswer,
} from "../../services/training/training";
import { processCorrectAnswer } from "../../services/training/training";

const TrainingMenu = () => {
  const [dataWord, setDataWord] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [userAnswerWords, setUserAnswerWords] = useState([]);

  const user = useAuth();

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

  if (!currentWord) {
    return <div>Загрузка слов...</div>;
  }

  return (
    <form onSubmit={(e) => handleComparisonWords(e)}>
      <div className="flex justify-end">
        <Level value={20} />
      </div>
      <div className=" relative">
        <div>
          <InputTraining
            value={userAnswer}
            ukChange={setUserAnswer}
            placeholder="Введіть переклад"
          />
        </div>
        <div className="absolute bottom-4 right-2">
          <LanguageIcon color="gray" lang="uk" />
        </div>
        <div className="absolute bottom-4 left-2 flex gap-2 items-center  ">
          <button
            type="button"
            onClick={handleNextWords}
            className=" text-gray-400 font-macpaw font-medium text-base "
          >
            Next
          </button>
          <LiaLongArrowAltRightSolid size={20} color="rgba(133, 170, 159, 1)" />
        </div>
      </div>
      <div className="relative ">
        <InputTraining
          value={currentWord.text}
          placeholder={currentWord.text}
          readOnly
        />
        <div className="absolute bottom-4 right-2">
          <LanguageIcon color="gray" lang="eu" />
        </div>
      </div>

      <div className=" mt-2 ">
        <Button text="Save" />
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="m-4 font-macpaw text-base font-bold underline text-greyText hover:text-black focus:text-black"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TrainingMenu;
