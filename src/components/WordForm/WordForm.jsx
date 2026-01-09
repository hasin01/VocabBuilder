import React, { useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import InputForm from "../InputForm/InputForm";
import { GoPlus } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";
import AddWordForm from "../AddWordForm/AddWordForm";
import Modal from "../Modal/Modal";
import { RxCross2 } from "react-icons/rx";
import FourColumnTable from "../Table/Table";

const WordForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  const [words, setWords] = useState([]); 
  let total = 20;

  
const handleSavedWord =(ukrainianWord,englishWord)=>{
console.log(ukrainianWord);
console.log(englishWord);
setWords([...words,{word:ukrainianWord,translation:englishWord}])
}

console.log(words);
  return (
    <div className="flex flex-col gap-1.5">
      <InputForm />
      <CustomSelect />
      <p
        className=" mt-5 text-[rgba(18,20,23,0.5)]
  font-[MacPawPixelDisplay]
  text-[14px]
  font-medium
  leading-[17px]
  tracking-[0%]
  text-left
"
      >
        To study:<span className=" text-black font-bold pl-0.5 ">{total}</span>
      </p>
      <div className=" flex gap-7 ">
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center  font-[MacPawPixelDisplay]
          font-medium
          text-[16px]"
        >
          Add word <GoPlus size={24} className="pl-1 text-buttonColor" />
        </button>
        <button
          className="  font-[MacPawPixelDisplay]
          font-medium
          text-[16px] flex items-center"
        >
          Train oneself{" "}
          <BsArrowRight size={24} className="pl-2 text-buttonColor" />
        </button>
      </div>
      <div className="mt-5">
        <FourColumnTable dataWord={words} />
      </div>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <button className="  " onClick={() => setIsOpen(false)}>
          {" "}
          <RxCross2 onClick={() => setIsOpen(false)} color="white" size={25} className=" absolute  right-3 top-2" />
        </button>

        <AddWordForm closeModal={closeModal} handleSavedWord={handleSavedWord} />
      </Modal>
    </div>
  );
};

export default WordForm;
