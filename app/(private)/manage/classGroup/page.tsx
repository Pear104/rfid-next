import { Get } from "@/lib/request";
import React from "react";

export default async function ClassPage() {
  const tableData = await Get(`/api/classGroup`);
  const rows = tableData.map((cl: any) => {
    return (
      <tr key={cl.id}>
        <td className="border-2 border-black px-2 py-1">{cl.id}</td>
        <td className="border-2 border-black px-2 py-1">{cl.classId}</td>
        <td className="border-2 border-black px-2 py-1">{cl.subjectId}</td>
        <td className="border-2 border-black px-2 py-1">{cl.lecturer.name}</td>
      </tr>
    );
  });
  return (
    <div className="">
      <div className="font-bold text-2xl">Class Info</div>
      <table>
        <thead>
          <tr>
            <td className="border-2 border-black px-2 py-1 font-bold">ID</td>
            <td className="border-2 border-black px-2 py-1 font-bold">Class</td>
            <td className="border-2 border-black px-2 py-1 font-bold">
              Subject
            </td>
            <td className="border-2 border-black px-2 py-1 font-bold">
              Lecturer
            </td>
          </tr>
        </thead>
        <tbody>{rows.map((row: any) => row)}</tbody>
      </table>
    </div>
  );
}
