import { Get } from "@/lib/request";
import React from "react";
import DeleteDialog from "@/components/shared/DeleteDialog";
import { CreateClassDialog } from "@/components/shared/CreateDialog";
import { EditDialog } from "@/components/shared/EditDialog";

const SubjectPage = async () => {
  const tableData = await Get(`/api/lecturer`);
  const fieldData = [
    { field: "id", text: "Lecturer ID" },
    { field: "name", text: "Lecturer name", type: "text" },
  ];
  const rows = tableData.map((lec: any) => {
    const data: any = fieldData.map((item: any) => {
      return {
        field: item.field,
        text: item.text,
        value: lec[item.field],
      };
    });
    return (
      <tr key={lec.id}>
        <td className="border-2 border-black px-2 py-1">{lec.id}</td>
        <td className="border-2 border-black px-2 py-1">{lec.name}</td>
        <td className="border-2 border-black px-2 py-1">
          <div className="flex gap-2">
            <EditDialog data={data} object="lecturer" id={lec.id}></EditDialog>
            <DeleteDialog id={lec.id} object="lecturer"></DeleteDialog>
          </div>
        </td>
      </tr>
    );
  });
  return (
    <div>
      <div className="font-bold text-2xl">Lecturer</div>
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
      <CreateClassDialog data={fieldData} object="lecturer">
        Create lecturer
      </CreateClassDialog>
    </div>
  );
};

export default SubjectPage;
