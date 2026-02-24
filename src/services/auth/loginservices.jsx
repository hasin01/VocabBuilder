


import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const  loginUser= async ({email, password})=>{ 

await signInWithEmailAndPassword(auth, email, password)
  .then(() => {
  })
  .catch((error) => {
  });


    
    }


    export default loginUser;