import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Banner } from '../components/Banner/Banner'
import RegisterForm from '../components/RegisterForm/RegisterForm'
  import { getAuth } from "firebase/auth";

export const Register = () => {


const auth = getAuth();
const user = auth.currentUser;

if (user) {
    // Пользователь авторизован, можно работать с его данными (uid, email и т.д.)
    console.log(user.uid);
} else {
    // Пользователь не авторизован
    console.log("Пользователь не вошел в систему");
}

  return (
    <div className=' container mx-auto '>
        <Header />
            <Link to="/VocabBuilder/">Главная</Link>
<Banner/>
<RegisterForm/>
    </div>
  )
}
