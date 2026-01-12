import { collection, getDocs, getFirestore } from "firebase/firestore";
import { app } from "../../firebaseConfig/firebaseConfig";
import { useState } from "react";

const db = getFirestore(app);



export const getCategoryWords = async (euId,category) => {
try {
  
  const wordsCollectionRef = collection(db, "users", euId, "categories", category, "words");

  const querySnapshot = await getDocs(wordsCollectionRef);
  
    const words = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));



return words
 

} catch (error) {
  console.log(error);
}
};