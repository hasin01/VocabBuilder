import React, { useState } from "react";

import CustomSelect from "../CustomSelect/CustomSelect";
import { useCategory } from "../../context/category/useCategorySet";
import LanguageIcon from "../LanguageIcon/LanguageIcon";

const AddWordForm = (props) => {
  const { category, handleSetCategory } = useCategory();

  const [ukrainianWord, setUkrainianWord] = useState("");
  const [englishWord, setEnglishWord] = useState("");

  const handelFormData = (e) => {
    e.preventDefault();
    setEnglishWord("");
    setUkrainianWord("");
    props.handleSavedWord(ukrainianWord,englishWord,category,)
    props.closeModal()
    
    
  };
const handleSelect = (selectedOption) => {
    handleSetCategory(selectedOption.value)
  }



  return (
    <form onSubmit={(e) => handelFormData(e)} className="flex flex-col gap-5">
    <div className=" text-white font-medium text-2xl font-macpaw" >Add word</div>
    <p className="font-macpaw font-normal text-base text-white">Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary.</p>
<CustomSelect variant="white" handleSelect={handleSelect}/>

      <LanguageIcon color="white" lang="uk"/>

      <input
        onChange={(e) => setUkrainianWord(e.target.value)}
        value={ukrainianWord}
        type="text"
        placeholder="Трохи, трішки"
        className=" py-3 pl-4 border border-white rounded-xl placeholder: text-white font-medium text-base "
      ></input>
<LanguageIcon color="white" lang="eu"/>
      <input
      pattern="[A-Za-z\s]+"

        onChange={(e) => setEnglishWord(e.target.value)}
        value={englishWord}
        type="text"
        placeholder="A little bit"
        className=" py-3 pl-4 border border-white rounded-xl placeholder: text-white  font-medium text-base"
      ></input>
      <div className="flex justify-between gap-2">
        <button
          type="submit"
          className=" w-full py-3 bg-white rounded-4xl font-[MacPawPixelDisplay] font-bold text-base leading-6 "
        >
          Save
        </button>
        <button
        onClick={ ()=>props.closeModal()}

          type="button"
          className=" w-full py-3 rounded-4xl border  border-white rounded-4xl text-white text-white font-[MacPawPixelDisplay] font-bold text-base leading-6"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default AddWordForm;
