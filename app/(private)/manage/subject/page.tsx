import { get } from "@/lib/request";
import React from "react";

const SubjectPage = async () => {
  const tableData = await get(`/api/subject`);
  const rows = tableData.map((sub: any) => {
    return (
      <tr>
        <td className="border-2 border-black px-2 py-1">{sub.id}</td>
        <td className="border-2 border-black px-2 py-1">{sub.name}</td>
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
