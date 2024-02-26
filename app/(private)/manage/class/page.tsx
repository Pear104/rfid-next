import { get } from "@/lib/request";
import React from "react";

export default async function ClassPage() {
  const tableData = await get(`/api/class`);
  const rows = tableData.map((cl: any) => {
    return (
      <tr key={cl.id}>
        <td className="border-2 border-black px-2 py-1">{cl.id}</td>
      </tr>
    );
  });
  return (
    <div className="">
      <div className="font-bold text-2xl">Class</div>
      <table>
        <thead>
          <tr>
            <td className="border-2 border-black px-2 py-1 font-bold">Class</td>
          </tr>
        </thead>
        <tbody>{rows.map((row: any) => row)}</tbody>
      </table>
    </div>
  );
}
