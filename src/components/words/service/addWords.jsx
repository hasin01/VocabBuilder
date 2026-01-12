import { addDoc, collection, doc, getFirestore } from "firebase/firestore";
import { useAuth } from "../../../context/useAuth";
import { app } from "../../../firebaseConfig/firebaseConfig";

const db = getFirestore(app);

export const addWord = async (userId, categoryName, wordObj) => {
  const categoryDocRef = doc(db, "users", userId, "categories", categoryName);

  const wordsCollectionRef = collection(categoryDocRef, "words");
console.log(wordObj);
  const newWordRef = await addDoc(wordsCollectionRef, wordObj);

  console.log("Word added with ID:", newWordRef.id);
};
