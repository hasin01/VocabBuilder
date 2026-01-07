import { getAuth, signOut } from "firebase/auth";

const auth = getAuth();


export const logOut = async ()=>{


    await signOut(auth).then(() => {

}).catch((error) => {
 console.log(error);


});

}