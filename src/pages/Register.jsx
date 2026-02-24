import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Banner } from '../components/Banner/Banner'
import RegisterForm from '../components/RegisterForm/RegisterForm'
  import { getAuth } from "firebase/auth";

export const Register = () => {


const auth = getAuth();
const user = auth.currentUser;



  return (
    <div className=' container mx-auto px-4'>
        <Header />
<Banner/>
<RegisterForm/>
    </div>
  )
}
