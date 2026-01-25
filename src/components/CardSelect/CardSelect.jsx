import React from "react";
import { GoPencil } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";

const CardSelect = (props) => {
  return (
    <>
      <div className=" absolute bg-white px-6 py-3 rounded-2xl top-7 right-2 z-10">
        <button
          onClick={() => {
            props.openModalEdit();
          }}
          className="flex items-center gap-2 "
        >
          {" "}
          <GoPencil color="#85AA9F" />
          Edit
        </button>
        <button
          onClick={() => {
            props.handleDeleteWord();
          }}
          className="flex items-center gap-2"
        >
          {" "}
          <RiDeleteBinLine color="#85AA9F" />
          Delete
        </button>
      </div>
    </>
  );
};

export default CardSelect;
