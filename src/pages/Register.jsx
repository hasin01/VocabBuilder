import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from '../components/Header/Header'
import { Banner } from '../components/Banner/Banner'
import RegisterForm from '../components/RegisterForm/RegisterForm'

export const Register = () => {
  return (
    <div className=' container mx-auto '>
        <Header />
            <Link to="/VocabBuilder/">Главная</Link>
<Banner/>
<RegisterForm/>
    </div>
  )
}
