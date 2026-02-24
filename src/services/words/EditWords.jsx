import { doc, getFirestore, updateDoc } from "firebase/firestore";
import { app } from '../../firebaseConfig/firebaseConfig';

const  EditWords = async (userId,categoryName ,idWords ,textWords)  => {

try {
    const db = getFirestore(app);
  const categoryDocRef = doc(db, "users", userId, "categories", categoryName,"words",idWords);


await updateDoc(categoryDocRef, {
text:textWords.text,
translation:textWords.translation,
    
});

} catch (error) {
}


}

export default EditWords

