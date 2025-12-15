import React from 'react'

import { Button } from "../Button/Button";

const LoginForm = () => {
  return (
    <form className=" container py-8 px-4 bg-bgForm  rounded-t-[25px] rounded-b-none  ">
      <h1 className="font-macpaw text-xl font-bold rounded-card bg-main">
      Login
      </h1>
      <p className="font-macpaw text-base font-normal leading-6 text-textColor ">

     Please enter your login details to continue using our service:
      </p>
      <div className=" flex flex-col  gap-3 my-4">
        <input className=" border border-gray-300 rounded-xl p-3 placeholder-gray-950 " placeholder="Email" />
        <input className=" border border-gray-300 rounded-xl p-3 placeholder-gray-950" placeholder="Password" />
      </div>
      <Button text="Login"  />
     <div className="flex justify-center">
       <button className=" m-4 font-macpaw text-base font-bold underline text-greyText hover:text-black focus:text-black " >Login</button>
     </div>
    </form>
  );
};

export default LoginForm