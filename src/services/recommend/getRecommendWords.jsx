import React from "react";
import {
  collectionGroup,
  query,
  where,
  getDocs,
  getFirestore,
  limit,
  orderBy,
} from "firebase/firestore";
import { app } from "../../firebaseConfig/firebaseConfig";
const getRecommendWords = async (userId) => {
  try {
    const db = getFirestore(app);

    const q = query(
      collectionGroup(db, "words"),
      where("userId", "==", userId),
      limit(20),
      orderBy("ease_factor"),
    );
    const snap = await getDocs(q);

    return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.log(error);
  }
};

export default getRecommendWords;

