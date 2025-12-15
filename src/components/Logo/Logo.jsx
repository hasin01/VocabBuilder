import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaUser } from "react-icons/fa";
import logo from '../../img/logo.svg';

export const Logo = () => {



  return (
    <div >
    <a className="flex items-center">
      <img src={logo} alt="VocabBuilder Logo" />
      <p className=" ml-4 text-xl font-macpaw  text-3xl ">VocabBuilder</p>
    </a>
    </div>
  );
};
