import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, getFirestore, setDoc, collection } from "firebase/firestore/lite";
import { app } from "../../firebaseConfig/firebaseConfig";

const registerUser = async ({ name, email, password }) => {
  const categories = [
    { value: "Verb", label: "Verb" },
    { value: "Participle", label: "Participle" },
    { value: "Noun", label: "Noun" },
    { value: "Adjective", label: "Adjective" },
    { value: "Pronoun", label: "Pronoun" },
    { value: "Numerals", label: "Numerals" },
    { value: "Adverb", label: "Adverb" },
    { value: "Preposition", label: "Preposition" },
    { value: "Conjuction", label: "Conjuction" },
    { value: "Phrasal verb", label: "Phrasal verb" },
    { value: "Functional phrase", label: "Functional phrase" },
  ];

  const auth = getAuth();
  const db = getFirestore(app);

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    if (user) {
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        fullName: name,
        email: user.email,
      });

      for (const cat of categories) {
        const categoryRef = doc(collection(userRef, "categories"), cat.value);
        await setDoc(categoryRef, {
          name: cat.label,
        });
      }
    }
  } catch (error) {
    console.log(error);
  }
};

export default registerUser;