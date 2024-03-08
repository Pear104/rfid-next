import { Get } from "@/lib/request";
import React from "react";
import DeleteDialog from "@/components/shared/DeleteDialog";
import { CreateClassDialog } from "@/components/shared/CreateDialog";
import { EditDialog } from "@/components/shared/EditDialog";

const SubjectPage = async () => {
  const tableData = await Get("/api/subject");
  const fieldData = [
    { field: "id", text: "Subject ID", type: "text" },
    { field: "name", text: "Subject name", type: "text" },
  ];
  const rows = tableData.map((sub: any) => {
    const data: any = fieldData.map((item: any) => {
      return {
        field: item.field,
        text: item.text,
        value: sub[item.field],
      };
    });
    return (
      <tr key={sub.id}>
        <td className="border-2 border-black px-2 py-1">{sub.id}</td>
        <td className="border-2 border-black px-2 py-1">{sub.name}</td>
        <td className="border-2 border-black px-2 py-1">
          <div className="flex gap-2">
            <EditDialog data={data} object="subject" id={sub.id}></EditDialog>
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
