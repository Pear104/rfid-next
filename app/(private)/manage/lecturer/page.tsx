import { get } from "@/lib/request";
import React from "react";

const SubjectPage = async () => {
  const tableData = await get(`/api/lecturer`);
  const rows = tableData.map((lec: any) => {
    return (
      <tr key={lec.id}>
        <td className="border-2 border-black px-2 py-1">{lec.id}</td>
        <td className="border-2 border-black px-2 py-1">{lec.name}</td>
      </tr>
    );
  });
  return (
    <div>
      <div className="font-bold text-2xl">Subject</div>
      <table>
        <thead>
          <tr>
            <td className="border-2 border-black px-2 py-1 font-bold">ID</td>
            <td className="border-2 border-black px-2 py-1 font-bold">Name</td>
          </tr>
        </thead>
        <tbody>{rows.map((row: any) => row)}</tbody>
      </table>
    </div>
  );
};

export default SubjectPage;
