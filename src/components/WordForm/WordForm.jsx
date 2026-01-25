import React, { useEffect, useState } from "react";
import CustomSelect from "../CustomSelect/CustomSelect";
import InputForm from "../InputForm/InputForm";
import { GoPlus } from "react-icons/go";
import { BsArrowRight } from "react-icons/bs";

import Modal from "../Modal/Modal";
import { RxCross2 } from "react-icons/rx";
import FourColumnTable from "../Table/Table";
import EditWordForm from "../EditWordForm/EditWordForm";
import AddWordForm from "../AddWordForm/AddWordForm";
import { addWord } from "../words/service/addWords";
import { useAuth } from "../../context/useAuth";
import { getCategoryWords } from "../words/getCategoryWords";
import deleteWords from ".././words/service/deleteWords";
const WordForm = () => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalEditData, setIsOpenModalEditData] = useState(null);
  const [isOpenModalEditDataId, setIsOpenModalEditDataId] = useState(null);


const openModalEdit =(e)=>{
setIsOpenModalEditDataId(e.id)
  setIsOpenModalEditData(e)
  setIsOpenModalEdit(true)
}
  const closeModalEdit = () => setIsOpenModalEdit(false);
  const closeModalAdd = () => setIsOpenModalAdd(false);
  const [words, setWords] = useState([]);
  const [category, setCategory] = useState("");
  const [wordsData, setWordsData] = useState([]);
  const user = useAuth();
  const [refreshKey, setRefreshKey] = useState(0);

const handleDeleteWord = async (id, category) => {
  console.log(id, category);

  await deleteWords(id, category, user.userId);
  const updatedData = await getCategoryWords(user.userId, category);
  setWordsData(updatedData);

updatePage()
};

const updatePage=()=>{
console.log("object");
  setRefreshKey(prev => prev + 1);

}

  useEffect(() => {
    const getWords = async () => {
      if (!user || !user.userId || !category) return;
      const data = await getCategoryWords(user.userId, category);
      setWordsData(data);
    };

    getWords();
  }, [category, refreshKey]);

  const handleSelect = async (e) => {
    setCategory(e.value);

    const data = await getCategoryWords(user.userId, e.value);
    setWordsData(data);
  };

  let total = 20;

  const handleSavedWord = async (ukrainianWord, englishWord, categoryName) => {
    addWord(user.userId, categoryName, {
      text: englishWord,
      translation: ukrainianWord,
    });
    setWords([...words, { word: ukrainianWord, translation: englishWord }]);
    const updatedData = await getCategoryWords(user.userId, categoryName);

    setWordsData(updatedData);
  };

  return (
    <div className="flex flex-col gap-1.5">
      <InputForm />
      <CustomSelect variant="dark" handleSelect={handleSelect} />
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
          onClick={() => setIsOpenModalAdd(true)}
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
        />
      </div>
      <Modal isOpen={isOpenModalEdit} onClose={() => setIsOpenModalEdit(false)}>
        <button className="  " onClick={() => setIsOpenModalEdit(false)}>
          {" "}
          <RxCross2
            onClick={() => setIsOpenModalEdit(false)}
            color="white"
            size={25}
            className=" absolute  right-3 top-3"
          />
        </button>

        <EditWordForm 
         updatePage={()=>updatePage()}
        category={category}
        isOpenModalEditDataId={isOpenModalEditDataId}
        isOpenModalEditData={isOpenModalEditData}
          closeModal={closeModalEdit}
          handleSavedWord={handleSavedWord}
        />
      </Modal>
      <Modal isOpen={isOpenModalAdd} onClose={() => setIsOpenModalAdd(false)}>
        <button className="  " onClick={() => setIsOpenModalAdd(false)}>
          {" "}
          <RxCross2
            onClick={() => setIsOpenModalAdd(false)}
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
    </div>
  );
};

export default WordForm;
