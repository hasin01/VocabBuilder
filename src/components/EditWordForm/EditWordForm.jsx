import React, { useState } from "react";
import ukrain from "../../img/ukraine.svg";
import united from "../../img/united.svg";
import EditWords from "../../services/words/EditWords";
import { useAuth } from "../../context/useAuth";


const EditWordForm = ({isOpenModalEditData,closeModal,category,isOpenModalEditDataId}) => {
  const [ukrainianWord, setUkrainianWord] = useState("");
  const [englishWord, setEnglishWord] = useState("");
  const user = useAuth();

  const handelFormData = (e) => {
    e.preventDefault();
    setEnglishWord("");
    setUkrainianWord("");
    closeModal()
    EditWords(user.userId,category,isOpenModalEditDataId,{text:ukrainianWord,translation:englishWord})
  };

  return (
    <form onSubmit={(e) => handelFormData(e)} className="flex flex-col gap-5 z-40 ">
      <div className="flex items-center gap-2 text-white font-medium text-sm leading-4 text-lef ">
        <img src={ukrain} alt="united" className="w-7 h-7" />
        Ukrainian
      </div>
      <input
        onChange={(e) => setUkrainianWord(e.target.value)}
        value={ukrainianWord}
        type="text"
        placeholder={isOpenModalEditData.text}
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
        placeholder={isOpenModalEditData.translation}
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
        onClick={()=> closeModal()}
          type="button"
          className=" w-full py-3 rounded-4xl border  border-white rounded-4xl text-white text-white font-[MacPawPixelDisplay] font-bold text-base leading-6"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditWordForm;
