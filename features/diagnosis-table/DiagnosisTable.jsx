import { useReactTable } from "@tanstack/react-table";
import React, { useMemo } from "react";

const DiagnosisTable = ({ data }) => {
  // Define columns
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "نام و نام خانوادگی",
        cell: (info) => <span>{info.getValue()}</span>,
      },
      {
        accessorKey: "nationalCode",
        header: "کدملی",
        cell: (info) => <span>{info.getValue()}</span>,
      },
      {
        accessorKey: "bmi",
        header: "BMI",
        cell: (info) => <span>{info.getValue()}</span>,
      },
      {
        accessorKey: "type",
        header: "نوع پسوریازیس تشخیص سامانه",
        cell: (info) => (
          <div className="flex items-center justify-center">
            <div
              className={`rounded-full px-4 py-1 text-center ${
                info.getValue() === "نوع"
                  ? "bg-red-600 text-white"
                  : "bg-blue-600 text-white"
              }`}
            >
              {info.getValue()}
            </div>
          </div>
        ),
      },
    ],
    [],
  );

  // Create table instance
  const table = useReactTable({
    data: data || [],
    columns,
  });

  return (
    <div className="rounded-xl bg-[#252B42] p-4 shadow-lg">
      <table className="w-full border-collapse text-center text-white">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => {
            return (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  console.log(header);
                  return (
                    <th
                      key={header.id}
                      className="border-b border-[#ffffff20] py-2 text-lg"
                    >
                      {header.isPlaceholder ? null : header.getLeafHeaders()}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className="border-b border-[#ffffff10]">
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="py-2">
                  {cell.renderCell()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiagnosisTable;
