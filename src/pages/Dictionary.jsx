import React from "react";
import { Header } from "../components/Header/Header";
import WordForm from "../components/WordForm/WordForm";

const Dictionary = () => {
  return (
    <div className=" container mx-auto px-4 bg-bgMain ">
      <Header />
      <WordForm />
    </div>
  );
};

export default Dictionary;
