import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import logo from '../../img/logo.svg';
import { NavLink } from "react-router-dom";

export const Logo = () => {



  return (
    <div >
    <NavLink to="/" className="flex items-center">
      <img src={logo} alt="VocabBuilder Logo" />
      <p className=" ml-4 text-xl font-macpaw  text-3xl ">VocabBuilder</p>
    </NavLink>
    </div>
  );
};
