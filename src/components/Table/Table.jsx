import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import CircularProgress from "../ProgressWords/ProgressWords";
import CardSelect from "../CardSelect/CardSelect";
import Loading from "../Loading/Loading";

export default function FourColumnTable(props) {
  const [ShowCardId, setShowCardId] = useState(null);

  const handleSelect = (e) => {
    setShowCardId((prev) => (prev === e.id ? null : e.id));
  };

  const closeCardSelect = () => {
    setShowCardId(null);
  };

  const columns = [
    { accessorKey: "text", header: "Word" },
    { accessorKey: "translation", header: "Translation" },
    {
      accessorKey: "progress",
      header: "Progress",
      cell: ({ row }) => (
        <div className="flex items-center justify-center">
          <CircularProgress value={1} />
        </div>
      ),
    },
    {
      accessorKey: "edit",
      header: " ",
      cell: ({ row }) => (
        <div className="flex justify-center relative">
          <button
            className="px-2 py-2"
            onClick={() => handleSelect(row.original)}
          >
            <HiOutlineDotsHorizontal />
          </button>
          {row.original.id === ShowCardId && (
            <CardSelect
              openModalEdit={() =>
                props.openModalEdit(row.original, closeCardSelect())
              }
              handleDeleteWord={() =>
                props.handleDeleteWord(row.original.id, props.category)
              }
            />
          )}
        </div>
      ),
    },
  ];

  const data = props.dataWord;
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
   <div className="w-full">
  {props.loading ? <Loading/> : null}

  <table className="w-full border rounded-md bg-white">
    <thead className="bg-[rgba(133,170,159,0.1)]">
      {table.getHeaderGroups().map((hg) => (
        <tr key={hg.id}>
          {hg.headers.map((header) => (
            <th
              key={header.id}
              className="
                border border-gray-300 text-left
                px-2 py-1 text-xs
                sm:px-3 sm:py-2 sm:text-sm
                md:px-4 md:py-2 md:text-base
              "
            >
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
    <tbody>
      {table.getRowModel().rows.map((row) => (
        <tr
          key={row.id}
          className="hover:bg-gray-50 odd:bg-white even:bg-gray-100"
        >
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              className="
                border border-gray-300
                px-2 py-1 text-xs
                sm:px-3 sm:py-2 sm:text-sm
                md:px-4 md:py-2 md:text-base
              "
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
</div>
  );
}