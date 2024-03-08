import { Button } from "@/components/ui/button";
import { Get } from "@/lib/request";
import React, { ReactNode } from "react";
import DeleteDialog from "@/components/shared/DeleteDialog";
import { EditDialog } from "@/components/shared/EditDialog";
import { CreateClassDialog } from "@/components/shared/CreateDialog";

export default async function ClassPage() {
  const tableData = await Get(`/api/class`);
  const fieldData = [{ field: "id", text: "Class ID", type: "text" }];
  const rows = tableData.map((cl: any) => {
    const data: any = fieldData.map((item: any) => {
      return {
        field: item.field,
        text: item.text,
        type: item.type,
        value: cl[item.field],
      };
    });
    return (
      <tr key={cl.id}>
        <td className="border-2 border-black px-2 py-1">{cl.id}</td>
        <td className="border-2 border-black px-2 py-1">
          <div className="flex gap-2">
            <EditDialog data={data} object="class" id={cl.id}></EditDialog>
            <DeleteDialog id={cl.id} object="class"></DeleteDialog>
          </div>
        </td>
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
            <td className="border-2 border-black px-2 py-1 font-bold">
              Action
            </td>
          </tr>
        </thead>
        <tbody>{rows.map((row: any) => row)}</tbody>
      </table>
      <CreateClassDialog data={fieldData} object="class">
        Create class
      </CreateClassDialog>
    </div>
  );
}
