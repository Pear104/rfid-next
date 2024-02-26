import { get } from "@/lib/request";
import React from "react";

export default async function StudentPage() {
  const tableData = await get(`/api/student`);
  const rows = tableData.map((sub: any) => {
    return (
      <tr>
        <td className="border-2 border-black px-2 py-1">{sub.id}</td>
        <td className="border-2 border-black px-2 py-1">{sub.name}</td>
        <td className="border-2 border-black px-2 py-1">{sub.uid}</td>
      </tr>
    );
  });
  return (
    <div>
      <div className="font-bold text-2xl">Student</div>
      <table>
        <thead>
          <tr>
            <td className="border-2 border-black px-2 py-1 font-bold">ID</td>
            <td className="border-2 border-black px-2 py-1 font-bold">Name</td>
            <td className="border-2 border-black px-2 py-1 font-bold">UID</td>
          </tr>
        </thead>
        <tbody>{rows.map((row: any) => row)}</tbody>
      </table>
    </div>
  );
}
