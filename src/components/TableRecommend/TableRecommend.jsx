import React, { useState } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { HiOutlineDotsHorizontal } from "react-icons/hi";
import CircularProgress from "../ProgressWords/ProgressWords";
import CardSelect from "../CardSelect/CardSelect";

export default function TableRecommend(props) {
  const columns = [
    { accessorKey: "text", header: "Word" },
    { accessorKey: "translation", header: "Translation" },
    {
      accessorKey: "categoryName",
      header: "Category",
    },

  ];

  const data = props.dataWord;
  console.log(data);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border rounded-md bg-white table-fixed">
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
                w-1/4 break-words
              "
                >
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext(),
                  )}
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
                break-words overflow-wrap-break-word max-w-0
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
