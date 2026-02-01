import CustomSelect from "../CustomSelect/CustomSelect";
import InputForm from "../InputForm/InputForm";
import { GoPlus } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";

import Modal from "../Modal/Modal";
import { RxCross2 } from "react-icons/rx";
import FourColumnTable from "../Table/Table";
import EditWordForm from "../EditWordForm/EditWordForm";
import AddWordForm from "../AddWordForm/AddWordForm";

import useModalAll from "../../hooks/useModalAll";
import { useWords } from "../../hooks/Words";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../context/auth/useAuth";



const WordForm = () => {
  const {
    isOpenModalAdd,
    isOpenModalEdit,
    isOpenModalEditData,
    isOpenModalEditDataId,
    openModalAdd,
    closeModalAdd,
    openModalEdit,
    closeModalEdit,
  } = useModalAll();


  const user = useAuth();
const {
  category,
wordsData,
loading,
handleDeleteWord,
handleSavedWord,handleSelect

} = useWords()



  let total = 20;



  return (
    <div className="flex flex-col gap-1.5">
      <InputForm />
      <CustomSelect value={category} variant="dark" handleSelect={handleSelect} />
      <p
        className=" mt-5 text-[rgba(18,20,23,0.5)]
    font-macpaw
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
          onClick={openModalAdd}
          className="flex items-center  font-macpaw
            font-medium
            text-[16px]"
        >
          Add word <GoPlus size={24} className="pl-1 text-buttonColor" />
        </button>
        <button
          className="  font-macpaw
            font-medium
            text-[16px] flex items-center"
        >
          Train oneself{" "}
          <BsArrowRight size={24} className="pl-2 text-buttonColor" />
        </button>
      </div>
      <div className="mt-5">
        <FourColumnTable
          openModalEdit={openModalEdit}
          closeModalEdit={closeModalEdit}
          handleDeleteWord={handleDeleteWord}
          category={category}
          dataWord={wordsData}
          user={user?.userId}
          loading={loading}
        />
      </div>
      <Modal isOpen={isOpenModalEdit} onClose={closeModalEdit}>
        <button className="  " onClick={closeModalEdit}>
          {" "}
          <RxCross2
            onClick={closeModalEdit}
            color="white"
            size={25}
            className=" absolute  right-3 top-3"
          />
        </button>

        <EditWordForm
          category={category}
          isOpenModalEditDataId={isOpenModalEditDataId}
          isOpenModalEditData={isOpenModalEditData}
          closeModal={closeModalEdit}
          handleSavedWord={handleSavedWord}
        />
      </Modal>
      <Modal isOpen={isOpenModalAdd} onClose={closeModalAdd}>
        <button className="  " onClick={closeModalAdd}>
          {" "}
          <RxCross2
            onClick={closeModalAdd}
            color="white"
            size={25}
            className=" absolute  right-3 top-3"
          />
        </button>

        <AddWordForm
          closeModal={closeModalAdd}
          handleSavedWord={handleSavedWord}
        />
      </Modal>
<ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </div>
  );
};

export default WordForm;
