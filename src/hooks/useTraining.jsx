import { collection, getDocs, getFirestore, orderBy, query, where } from "firebase/firestore";
import { useAuth } from "../context/auth/useAuth";
import { getAllWords } from "../services/training/getAllFiles";
import { app } from "../firebaseConfig/firebaseConfig";



export const  useTraining = ( )=>{
  const user = useAuth();

}




