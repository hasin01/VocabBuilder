import React from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import InputForm from "../InputForm/InputForm";
import SimpleTable from "../Table/Table";
import { GoPlus } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";

const WordForm = () => {
  let total = 20;

  return (
    <div className="flex flex-col gap-1.5">
      <InputForm />
      <CustomSelect />
      <p
        className=" mt-5 text-[rgba(18,20,23,0.5)]
  font-[MacPaw Fixel Display]
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
    <button className="flex items-center  font-[MacPaw Fixel Display]
          font-medium
          text-[16px]">Add word <GoPlus size={24} className="pl-1 text-buttonColor" /></button>
    <button className="  font-[MacPaw Fixel Display]
          font-medium
          text-[16px] flex items-center">Train oneself <BsArrowRight  size={24} className="pl-2 text-buttonColor" /></button>

    </div>
      <div className="mt-5">
        <SimpleTable />
      </div>
    </div>
  );
};

export default WordForm;
