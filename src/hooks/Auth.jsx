import { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { app } from "../firebaseConfig/firebaseConfig";

const useAuthUser = () => {
  const [userInfo, setUserInfo] = useState(null);
  const db = getFirestore(app);
  const auth = getAuth();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const userRef = doc(db, "users", uid);
        const docSnap = await getDoc(userRef);
        if (docSnap.exists()) {
          setUserInfo({...docSnap.data() ,userId:uid});
       
        } else {
          setUserInfo(null);
        }
      } else {
        setUserInfo(null);
      }
    });

    return () => unsubscribe();
  }, [auth, db]);

  return userInfo;
};

export default useAuthUser;
