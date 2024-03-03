import { Get } from "@/lib/request";
import React from "react";

export default async function ClassInfoPage() {
  const tableData = await Get(`/api/classInfo`);
  const rows = tableData.map((sub: any) => {
    return (
      <tr key={sub.id}>
        <td className="border-2 border-black px-2 py-1">{sub.id}</td>
        <td className="border-2 border-black px-2 py-1">{sub.name}</td>
        <td className="border-2 border-black px-2 py-1">{sub.id}</td>
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
