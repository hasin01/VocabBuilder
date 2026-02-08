import {
  collection,
  query,
  orderBy,
  startAt,
  endAt,
  getDocs,
  getFirestore,
  collectionGroup,
  where,
  limit,

} from "firebase/firestore";
import { app } from "../../firebaseConfig/firebaseConfig";
const db = getFirestore(app);

export async function searchWordsPrefix(userId, searchTerm) {

  console.log(userId, searchTerm);
  const q = query(
    collectionGroup(db, "words"),
    where("userId", "==", userId),
    orderBy("text"),
    startAt(searchTerm),
    endAt(searchTerm + "\uf8ff"),
    limit(20)
  );

  const querySnapshot = await getDocs(q);
  const results = [];
  querySnapshot.forEach((doc) => {
    results.push({ id: doc.id, ...doc.data() });
  });
  return results;
}
