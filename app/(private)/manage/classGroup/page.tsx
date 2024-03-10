import { Get } from "@/lib/request";
import { ClassInfo } from "@prisma/client";
import React from "react";
import { CreateGroupDialog } from "./components/CreateGroupDialog";

export default async function ClassPage() {
  const tableData = await Get(`/api/classGroup`);
  const _classIds = Get(`/api/class`);
  const _subjectIds = Get(`/api/subject`);
  const _lecturerIds = Get(`/api/lecturer`);
  const [classIds, subjectIds, lecturerIds] = await Promise.all([
    _classIds,
    _subjectIds,
    _lecturerIds,
  ]);
  const fieldData = [
    {
      field: "classId",
      text: "Class ID",
      type: "select",
      value: {
        items: classIds,
        valueField: "id",
        textField: "id",
      },
    },
    {
      field: "subjectId",
      text: "Subject ID",
      type: "select",
      value: {
        items: subjectIds,
        valueField: "id",
        textField: "id",
      },
    },
    {
      field: "lecturerId",
      text: "Lecturer ID",
      type: "select",
      value: {
        items: lecturerIds,
        valueField: "id",
        textField: "name",
      },
    },
    {
      field: "slotOrder",
      text: "Slot order",
      type: "select",
      value: {
        items: [1, 2, 3, 4],
      },
    },
  ];
  const rows = tableData.map((cl: any) => {
    return (
      <tr key={cl.id}>
        <td className="border-2 border-black px-2 py-1">{cl.id}</td>
        <td className="border-2 border-black px-2 py-1">{cl.classId}</td>
        <td className="border-2 border-black px-2 py-1">{cl.subjectId}</td>
        <td className="border-2 border-black px-2 py-1">{cl.lecturer.name}</td>
        <td className="border-2 border-black px-2 py-1">{cl.slotOrder}</td>
        <td className="border-2 border-black px-2 py-1">
          {/* <EditDialog data={data} object="class" id={cl.id}></EditDialog> */}
          {/* <DeleteDialog id={cl.id} object="class"></DeleteDialog> */}
        </td>
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
            <td className="border-2 border-black px-2 py-1 font-bold">
              Slot order
            </td>
            <td className="border-2 border-black px-2 py-1 font-bold">
              Action
            </td>
          </tr>
        </thead>
        <tbody>{rows.map((row: any) => row)}</tbody>
      </table>
      <CreateGroupDialog
        data={fieldData}
        object="subject"
        classIds={classIds}
        lecturerIds={lecturerIds}
        subjectIds={subjectIds}
      >
        Create class group
      </CreateGroupDialog>
    </div>
  );
}
