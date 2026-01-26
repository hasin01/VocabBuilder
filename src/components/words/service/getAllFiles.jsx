// import { collectionGroup, query, where, getDocs, getFirestore } from "firebase/firestore";
// import { app } from "../../../firebaseConfig/firebaseConfig";

// export async function getAllWords(userId) {
//     console.log(userId);
//     const db = getFirestore(app);

//   const q = query(collectionGroup(db, "words"), where("userId", "==", userId));
//   const snap = await getDocs(q);

//   return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
// }


