import React from "react";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaUser } from "react-icons/fa";

export const Logo = () => {



  return (
    <div >
    <a className="flex items-center">
      <img src="src/img/logo.svg" alt="VocabBuilder Logo" />
      <p className=" ml-4 text-xl font-medium">VocabBuilder</p>
    </a>
    </div>
  );
};
