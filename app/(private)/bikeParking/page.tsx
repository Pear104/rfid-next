import { Get } from "@/lib/request";
import React from "react";

const DataTable = ({ data: tableData }: { data: any[] }) => {
  const rows: any[] = tableData.map((cl: any) => {
    return (
      <tr key={cl.id}>
        <td className="border-2 border-black px-2 py-1">{cl.id}</td>
        <td className="border-2 border-black px-2 py-1">{cl.studentId}</td>
        <td className="border-2 border-black px-2 py-1">{cl.time}</td>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <td className="border-2 border-black px-2 py-1 font-bold">ID</td>
          <td className="border-2 border-black px-2 py-1 font-bold">
            Student ID
          </td>
          <td className="border-2 border-black px-2 py-1 font-bold">Time</td>
        </tr>
      </thead>
      <tbody>{rows.map((row: any) => row)}</tbody>
    </table>
  );
};

export default async function page() {
  const data = await Get("/api/bikeParking");
  return (
    <div>
      <div className="font-bold text-2xl">Bike Parking</div>
      <div className="mt-2">
        <DataTable data={data}></DataTable>
      </div>
    </div>
  );
}
