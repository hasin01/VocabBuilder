import { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";
import { getCategoryWords } from "../components/words/service/getCategoryWords";

import { addWord } from "../components/words/service/addWords";
import deleteWord from "../components/words/service/deleteWords";

export const useWords = () => {
  const user = useAuth();

  const [words, setWords] = useState([]);
  const [wordsData, setWordsData] = useState([]);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchWords = async () => {
      if (!user?.userId || !category) return;
      const data = await getCategoryWords(user.userId, category);
      setWordsData(data);
    };

    fetchWords();
  }, [user, category]);

  const handleDeleteWord = async (id, category) => {
    await deleteWord(id, category, user.userId);
    const updatedData = await getCategoryWords(user.userId, category);
    setWordsData(updatedData);
  };
  const handleSelect = async (e) => {
    setCategory(e.value);
    const data = await getCategoryWords(user.userId, e.value);
    setWordsData(data);
  };

  const handleSavedWord = async (ukrainianWord, englishWord, categoryName) => {
    await addWord(user.userId, categoryName, {
      text: englishWord,
      translation: ukrainianWord,
      level: 1,
      userId: user.userId,
    });
    setWords([...words, { word: ukrainianWord, translation: englishWord }]);
    const updatedData = await getCategoryWords(user.userId, categoryName);

    setWordsData(updatedData);
  };
  return {
    category,
    words,
    wordsData,
    handleDeleteWord,
    handleSavedWord,
    handleSelect,
  };
};
