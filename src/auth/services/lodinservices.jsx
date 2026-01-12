


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const  loginUser= async ({email, password})=>{ 

await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    const errorCode = error.code;
    console.log(error);
    const errorMessage = error.message;
  });


    
    }


    export default loginUser;