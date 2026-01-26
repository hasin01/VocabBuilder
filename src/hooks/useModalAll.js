import { useState } from 'react';

const useModalAll = () => {
  const [isOpenModalAdd, setIsOpenModalAdd] = useState(false);
  const [isOpenModalEdit, setIsOpenModalEdit] = useState(false);
  const [isOpenModalEditData, setIsOpenModalEditData] = useState(null);
  const [isOpenModalEditDataId, setIsOpenModalEditDataId] = useState(null);

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
    openModalAdd,
    closeModalAdd,
    openModalEdit,
    closeModalEdit,
  };
};

export default useModalAll;