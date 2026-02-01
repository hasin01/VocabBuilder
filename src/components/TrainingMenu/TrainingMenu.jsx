import React from "react";
import InputTraining from "../InputTraining/InputTraining";
import Level from "../level/level";
import LanguageIcon from "../LanguageIcon/LanguageIcon";
import { Button } from "../Button/Button";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";

const TrainingMenu = () => {
  return (
    <form>
      <div className="flex justify-end">
        <Level value={20} />
      </div>
      <div className=" relative">
        <div>
          <InputTraining placeholder="Введіть переклад" />
        </div>
        <div className="absolute bottom-4 right-2">
          <LanguageIcon color="gray" lang="uk" />
        </div>
             <div className="absolute bottom-4 left-2 flex gap-2 items-center  ">
      
        <button className=" text-gray-400 font-macpaw font-medium text-base ">
  Next 
        </button>
<LiaLongArrowAltRightSolid size={20} color="rgba(133, 170, 159, 1)" />

        </div>
      </div>
      <div className="relative ">
        <InputTraining placeholder="Break in" />
        <div className="absolute bottom-4 right-2">
          <LanguageIcon color="gray" lang="eu" />
        </div>
      </div>

      <div className=" mt-2 ">
        <Button text="Save" />
      </div>
      <div className="flex justify-center">
        <button
          type="button"
          className="m-4 font-macpaw text-base font-bold underline text-greyText hover:text-black focus:text-black"
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default TrainingMenu;
