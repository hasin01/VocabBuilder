import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import { app } from "../../firebaseConfig/firebaseConfig";

const db = getFirestore(app);

const deleteWord = async (id, category, userId) => {
  try {
    console.log(id, category, userId);
    const wordDocRef = doc(db, "users", userId, "categories", category, "words", id);

    console.log("Deleting document:", wordDocRef.path);

    await deleteDoc(wordDocRef);

  } catch (error) {
    console.error("Error deleting word:", error);
  }
};

export default deleteWord;