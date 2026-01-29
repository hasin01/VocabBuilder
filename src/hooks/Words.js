import { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";
import { getCategoryWords } from "../components/words/service/getCategoryWords";

import { addWord } from "../components/words/service/addWords";
import deleteWord from "../components/words/service/deleteWords";
import { toast } from "react-toastify";

export const useWords = () => {
  const user = useAuth();

  const [words, setWords] = useState([]);
  const [wordsData, setWordsData] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");



  useEffect(() => {
    const fetchWords = async () => {
      if (!user?.userId || !category) return;
      try {
        setLoading(true);
        const data = await getCategoryWords(user.userId, category);
        setWordsData(data);
      } catch (error) {
        setError(error);
        toast.error("Произошла ошибка при загрузке слов!");
      } finally {
        setLoading(false);
      }
    };

    fetchWords();
  }, [user, category]);

  const handleDeleteWord = async (id, category) => {
    try {
      setLoading(true);
      await deleteWord(id, category, user.userId);
      const updatedData = await getCategoryWords(user.userId, category);
      setWordsData(updatedData);
      toast.success("Слово успешно удалено!");
    } catch (error) {
      setError(error);
      toast.error("Произошла ошибка при удалении!");
    } finally {
      setLoading(false);
    }
  };
  const handleSelect = async (e) => {
    try {
      setLoading(true);
      setCategory(e.value);
      const data = await getCategoryWords(user.userId, e.value);
      setWordsData(data);
    } catch (error) {
      setError(error);
      toast.error("Произошла ошибка при загрузке категорий!");
    } finally {
      setLoading(false);
    }
  };

  const handleSavedWord = async (ukrainianWord, englishWord, categoryName) => {
    try {
      setLoading(true);
      await addWord(user.userId, categoryName, {
        text: englishWord,
        translation: ukrainianWord,
        level: 1,
        userId: user.userId,
      });
      
      setWords([...words, { word: ukrainianWord, translation: englishWord }]);
      const updatedData = await getCategoryWords(user.userId, categoryName);
      setWordsData(updatedData);
      toast.success("Слово успешно добавлено!");
    } catch (error) {
      toast.error("Произошла ошибка при добавлении!");
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    category,
    words,
    wordsData,
    loading,
    error,
    handleDeleteWord,
    handleSavedWord,
    handleSelect,
    
  };
};
