import { CreateClassDialog } from "@/components/shared/CreateDialog";
import DeleteDialog from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { Get } from "@/lib/request";
import React from "react";

export default async function StudentPage() {
  const tableData = await Get(`/api/student`);
  const fieldData = [
    { field: "id", text: "Student ID", type: "text" },
    { field: "name", text: "Student name", type: "text" },
    { field: "uid", text: "Student UID", type: "text" },
  ];
  const rows = tableData.map((stu: any) => {
    const data: any = fieldData.map((item: any) => {
      return {
        field: item.field,
        text: item.text,
        value: stu[item.field],
      };
    });
    return (
      <tr key={stu.id}>
        <td className="border-2 border-black px-2 py-1">{stu.id}</td>
        <td className="border-2 border-black px-2 py-1">{stu.name}</td>
        <td className="border-2 border-black px-2 py-1">{stu.uid}</td>
        <td className="border-2 border-black px-2 py-1">
          <div className="flex gap-2">
            <EditDialog data={data} object="student" id={stu.id}></EditDialog>
            <DeleteDialog id={stu.id} object="student"></DeleteDialog>
          </div>
        </td>
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
            <td className="border-2 border-black px-2 py-1 font-bold">
              Action
            </td>
          </tr>
        </thead>
        <tbody>{rows.map((row: any) => row)}</tbody>
      </table>
      <CreateClassDialog data={fieldData} object="student">
        Create student
      </CreateClassDialog>
    </div>
  );
}
