import { useState } from 'react';

const useModalAll = () => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalEditData, setIsOpenModalEditData] = useState(null);
  const [isOpenModalEditDataId, setIsOpenModalEditDataId] = useState(null);
  const [isOpenModalTrainingWord, setIsOpenModalTrainingWord] = useState(false);
  const [isOpenModalTrainingWordData, setOpenModalTrainingWordData] = useState(null);

  
  const closeModalTrainingWord = () => setIsOpenModalTrainingWord(false);
  const openModalTrainingWord = (data) => {
 setIsOpenModalTrainingWord(true)
 setOpenModalTrainingWordData(data)

  };

  const openModalAdd = () => setIsOpenModalAdd(true);
  const closeModalAdd = () => setIsOpenModalAdd(false);

  const openModalEdit = (data) => {
    setIsOpenModalEditDataId(data.id);
    setIsOpenModalEditData(data);
    setIsOpenModalEdit(true);
    
  };
  const closeModalEdit = () => setIsOpenModalEdit(false);

  return {
    isOpenModalAdd,
    isOpenModalEdit,
    isOpenModalEditData,
    isOpenModalEditDataId,
    isOpenModalTrainingWordData,
    isOpenModalTrainingWord,
    openModalAdd,
    closeModalAdd,
    openModalEdit,
    closeModalEdit,
    openModalTrainingWord,
    closeModalTrainingWord
  };
};

export default useModalAll;