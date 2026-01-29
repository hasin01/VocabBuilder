import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../../firebaseConfig/firebaseConfig";

const db = getFirestore(app);

export const getCategoryWords = async (userId, category = "Adjective") => {
  try {
    const wordsCollectionRef = collection(db, "users", userId, "categories", category, "words");
    const querySnapshot = await getDocs(wordsCollectionRef);
    const words = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log(words);

    return words;
  } catch (error) {
    console.error("Error fetching category words:", error);
    return [];
  }
};