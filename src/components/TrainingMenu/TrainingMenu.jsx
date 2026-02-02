import InputTraining from "../InputTraining/InputTraining";
import Level from "../Level/Level";
import LanguageIcon from "../LanguageIcon/LanguageIcon";
import { Button } from "../Button/Button";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import { useTraining } from "../../hooks/useTraining";
import AddWordPreview from "../AddWordPreview/AddWordPrewiew";
import useModalAll from "../../hooks/useModalAll";
import Modal from "../Modal/Modal";
import { RxCross2 } from "react-icons/rx";
import TrainingModal from "../TrainingModal/TrainingModal";

const TrainingMenu = () => {
  const {
    userAnswer,
    currentWord,
    dataLength,
    currentIndex,
    handleComparisonWords,
    handleNextWords,
    setUserAnswer,
  } = useTraining();
  const ButtonDisable = !(currentIndex == dataLength - 1);
  const {
    openModalTrainingWord,
    isOpenModalTrainingWordData,
     isOpenModalTrainingWord,
    closeModalTrainingWord,
  } = useModalAll();

  return (
    <div>
      {currentWord ? (
        <form onSubmit={(e) => handleComparisonWords(e, openModalTrainingWord)}>
          <div className="flex justify-end">
            <Level value={20} />
          </div>
          <div className=" relative">
            <div>
              <InputTraining
                value={userAnswer}
                ukChange={setUserAnswer}
                placeholder="Введіть переклад"
              />
            </div>
            <div className="absolute bottom-4 right-2">
              <LanguageIcon color="gray" lang="uk" />
            </div>
            <div className="absolute bottom-4 left-2 flex gap-2 items-center  ">
              {ButtonDisable ? (
              <div className="flex items-center gap-1">
                  <button
                  type="button"
                  onClick={handleNextWords}
                  className=" text-gray-400 font-macpaw font-medium text-base "
                >
                  Next
              
                </button>
                    <LiaLongArrowAltRightSolid
                    size={20}
                    color="rgba(133, 170, 159, 1)"
                  />
              </div>
                
              ) : (
                <></>
              )}
            </div>
          </div>
          <div className="relative ">
            <InputTraining
              value={currentWord?.text}
              placeholder={currentWord?.text}
              readOnly
            />
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
      ) : (
        <div>
          <AddWordPreview />
        </div>
      )}
      <Modal isOpen={isOpenModalTrainingWord} onClose={closeModalTrainingWord}>
        <button className="  " onClick={closeModalTrainingWord}>
          {" "}
          <RxCross2
            onClick={closeModalTrainingWord}
            color="white"
            size={25}
            className=" absolute  right-3 top-3"
          />
        </button>

        <TrainingModal isOpenModalTrainingWordData={isOpenModalTrainingWordData}/>
      </Modal>
    </div>
  );
};

export default TrainingMenu;
