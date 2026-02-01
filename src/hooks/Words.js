import { useEffect, useState } from "react";
import { getCategoryWords } from "../services/words/getCategoryWords";
import { addWord } from "../services/words/addWords";
import deleteWord from "../services/words/deleteWords";
import { toast } from "react-toastify";
import { useAuth } from "../context/auth/useAuth";

export const useWords = () => {
  const user = useAuth();

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
        toast.error("There was an error loading words.");
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
      toast.success("The word has been successfully deleted.");
    } catch (error) {
      setError(error);
      toast.error("An error occurred while deleting");
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
      toast.error("There was an error loading categories.");
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
      const updatedData = await getCategoryWords(user.userId, categoryName);
      setWordsData(updatedData);
      toast.success("The word has been added successfully.");
    } catch (error) {
      toast.error("");
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return {
    category,
    wordsData,
    loading,
    error,
    handleDeleteWord,
    handleSavedWord,
    handleSelect,
  };
};
