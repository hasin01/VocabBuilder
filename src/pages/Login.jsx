import React from 'react'
import { Header } from '../components/Header/Header'
import { Banner } from '../components/Banner/Banner'
import LoginForm from '../components/LoginForm/LoginForm'
import { MenuLogin } from '../components/MenuLogin/MenuLogin'

export const Login = () => {
  return (
    <div>
        <Header />
   <Banner />
   <MenuLogin/>
   <LoginForm/>
    </div>
  )
}
