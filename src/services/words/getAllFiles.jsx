import { collectionGroup, query, where, getDocs, getFirestore, limit, orderBy } from "firebase/firestore";
import { app } from "../../firebaseConfig/firebaseConfig";
import { VscGlobe } from "react-icons/vsc";

export async function getAllWords(userId) {
   try {
     const db = getFirestore(app);

  const q = query(collectionGroup(db, "words"), where("userId", "==", userId),limit(20));
  const snap = await getDocs(q);

  return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
   } catch (error) {
    console.log(error);
   }
}


