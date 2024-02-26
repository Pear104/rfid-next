import { get } from "@/lib/request";
import React from "react";

export default async function ClassMemberTable({
  classInfoId,
}: {
  classInfoId: string;
}) {
  const data = await get("/api/attendance?id=" + classInfoId);
  const rows = data.map((item: any) => {
    return (
      <tr key={item.id}>
        <td className="border-2 border-black px-2 py-1">{item.studentId}</td>
        <td className="border-2 border-black px-2 py-1">{item.student.name}</td>
      </tr>
    );
  });
  return (
    <div className="">
      <div className="font-bold text-2xl">
        Danh sách học sinh lớp {data[0].classInfo.classId} môn{" "}
        {data[0].classInfo.subjectId}
      </div>
      <table className="mt-4">
        <thead>
          <tr>
            <td className="border-2 border-black px-2 py-1 font-bold">MSSV</td>
            <td className="border-2 border-black px-2 py-1 font-bold">Class</td>
          </tr>
        </thead>
        <tbody>{rows.map((row: any) => row)}</tbody>
      </table>
    </div>
  );
}
