import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import logo from '../../img/logo.svg';
import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth/useAuth";

export const Logo = () => {

  const {user} = useAuth();


  return (
    <div className="flex items-center">

 { user?     <NavLink to="/dictionary" className="flex items-center ">
      <img src={logo} alt="VocabBuilder Logo" />
      <p className=" ml-4 font-macpaw text-xl font-medium ">VocabBuilder</p>
    </NavLink>:    <NavLink to="/" className="flex items-center ">
      <img src={logo} alt="VocabBuilder Logo" />
      <p className=" ml-4 font-macpaw text-xl font-medium ">VocabBuilder</p>
    </NavLink>}

    

    </div>
  );
};
