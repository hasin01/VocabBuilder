import React, { useState } from "react";
import Modal from "react-modal";
import ukrain from "../../img/ukraine.svg";
import united from "../../img/united.svg";
import CustomSelect from "../CustomSelect/CustomSelect";

const AddWordForm = (props) => {
  const [ukrainianWord, setUkrainianWord] = useState("");
  const [englishWord, setEnglishWord] = useState("");
const [cat,setCat]=useState("")
  const handelFormData = (e) => {
    e.preventDefault();
    setEnglishWord("");
    setUkrainianWord("");
    props.handleSavedWord(ukrainianWord,englishWord,cat,)
    props.closeModal()
    
    
  };
const handleSelect = (selectedOption) => {
    setCat(selectedOption.value)
  }



  return (
    <form onSubmit={(e) => handelFormData(e)} className="flex flex-col gap-5">
    <div className=" text-white font-medium text-2xl font-macpaw" >Add word</div>
    <p className="font-macpaw font-normal text-base text-white">Adding a new word to the dictionary is an important step in enriching the language base and expanding the vocabulary.</p>
<CustomSelect variant="white" handleSelect={handleSelect}/>
      <div className="flex items-center gap-2 text-white font-medium text-sm leading-4 text-lef">
        <img src={ukrain} alt="united" className="w-7 h-7" />
        Ukrainian
      </div>
      <input
        onChange={(e) => setUkrainianWord(e.target.value)}
        value={ukrainianWord}
        type="text"
        placeholder="Трохи, трішки"
        className=" py-3 pl-4 border border-white rounded-xl placeholder: text-white font-medium text-base "
      ></input>
      <div className="flex items-center gap-2 text-white font-medium text-sm leading-4 text-lef">
        <img src={united} alt="united" className="w-7 h-7" />
        English
      </div>
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
