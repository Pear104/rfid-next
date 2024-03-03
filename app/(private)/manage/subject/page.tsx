import { Get } from "@/lib/request";
import React from "react";
import { EditDialog } from "./EditDialog";
import DeleteDialog from "@/components/shared/DeleteDialog";
import { CreateClassDialog } from "@/components/shared/CreateDialog";

const SubjectPage = async () => {
  const tableData = await Get("/api/subject");
  const fieldData = [
    { field: "id", text: "Subject ID" },
    { field: "name", text: "Subject name" },
  ];
  const rows = tableData.map((sub: any) => {
    return (
      <tr key={sub.id}>
        <td className="border-2 border-black px-2 py-1">{sub.id}</td>
        <td className="border-2 border-black px-2 py-1">{sub.name}</td>
        <td className="border-2 border-black px-2 py-1">
          <div className="flex gap-2">
            <EditDialog data={sub}></EditDialog>
            <DeleteDialog id={sub.id} object="subject"></DeleteDialog>
          </div>
        </td>
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
            <td className="border-2 border-black px-2 py-1 font-bold">
              Action
            </td>
          </tr>
        </thead>
        <tbody>{rows.map((row: any) => row)}</tbody>
      </table>
      <CreateClassDialog data={fieldData} object="subject">
        Create subject
      </CreateClassDialog>
    </div>
  );
};

export default SubjectPage;
