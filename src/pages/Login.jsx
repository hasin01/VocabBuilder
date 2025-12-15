import React from 'react'
import { Header } from '../components/Header/Header'
import { Link } from 'react-router-dom'
import { Banner } from '../components/Banner/Banner'
import LoginForm from '../components/LoginForm/LoginForm'
import { MenuLogin } from '../components/MenuLogin/MenuLogin'

export const Login = () => {
  return (
    <div>
        <Header />
      <Link to="/VocabBuilder/">Главная</Link>

   <Banner />
   <MenuLogin/>
   <LoginForm/>
    </div>
  )
}
