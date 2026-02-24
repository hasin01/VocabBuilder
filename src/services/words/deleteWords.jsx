import { doc, deleteDoc, getFirestore } from "firebase/firestore";
import { app } from "../../firebaseConfig/firebaseConfig";

const db = getFirestore(app);

const deleteWord = async (id, category, userId) => {
  try {
    const wordDocRef = doc(db, "users", userId, "categories", category, "words", id);

    await deleteDoc(wordDocRef);

  } catch (error) {
  }
};

export default deleteWord;