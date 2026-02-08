import React from "react";
import { FiSearch } from "react-icons/fi";

const InputForm = ({onValueChange}) => {

  return (
    <div className="relative w-full">
      <input
       onChange={(e) => onValueChange(e.target.value)}
        className="
          rounded-[15px] border border-[rgba(18,20,23,0.1)]
          w-full
          placeholder:text-black
          font-[MacPaw Fixel Display]
          font-medium
          text-[16px]
          tracking-[0]
          py-3 pl-8 pr-6
        "
        placeholder="Find the word"
        id="string"
        type="text"
      />

      <FiSearch
        className="absolute right-5 top-1/2 -translate-y-1/2 text-[18px] text-[rgba(18,20,23,1)]"
      />
    </div>
  );
};

export default InputForm;