import React from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";



const columns = [
  { accessorKey: "text", header: "Word" },
  { accessorKey: "translation", header: "Translation" },
  { accessorKey: "progress", header: "Progress" },
  { accessorKey: "edit", header: " " },
];

export default function FourColumnTable(props) {
 const data= props.dataWord
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
   <table className="w-full box-border border rounded-tl-md bg-white">

      <thead className="bg-[rgba(133,170,159,0.1)]">
        {table.getHeaderGroups().map((hg) => (
          <tr key={hg.id}>
            {hg.headers.map((header) => (
              <th
                key={header.id}
                className="px-4 py-2 border border-gray-300 text-left"
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
              <td key={cell.id} className="border border-gray-300 px-4 py-2">
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}