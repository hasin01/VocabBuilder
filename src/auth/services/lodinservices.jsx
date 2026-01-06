


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const  loginUser= async ({email, password})=>{ 

await signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


    
    }


    export default loginUser;