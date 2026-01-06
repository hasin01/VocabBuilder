import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore/lite";
import { app } from "../../firebaseConfig/firebaseConfig";
 

  const registerUser = async ({name, email, password})=>{


const auth = getAuth();
const db = getFirestore(app);
try {
       const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;
    console.log(user);
if (user) {
  const docRef = doc(db, "users", user.uid);
  await setDoc(docRef, {
    fullName: name,
    email: user.email,
  });
}

} catch (error) {
    console.log(error);
}

  }

  export default registerUser;