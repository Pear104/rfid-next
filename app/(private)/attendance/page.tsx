import React from "react";

import SelectFieldNav from "@/components/shared/SelectFieldNav";
import { Get } from "@/lib/request";
import AttendanceTable from "@/components/shared/AttendanceTable";

const Attendance = async ({
  searchParams,
}: {
  searchParams?: { subject?: string; class?: string };
}) => {
  const subject = await Get("/api/subject");
  const classes = await Get("/api/class");
  let tableData: any = null;
  if (searchParams?.subject && searchParams?.class) {
    tableData = await Get(
      `/api/classInfo?subject=${searchParams?.subject}&class=${searchParams?.class}`
    );
  }
  return (
    <>
      <div className="font-bold text-2xl">Attendance</div>
      <div className="flex gap-4 mt-2">
        <SelectFieldNav
          label="Subject"
          items={subject}
          valueField="id"
          textField="id"
        />
        <SelectFieldNav
          label="Class"
          items={classes}
          valueField="id"
          textField="id"
        />
      </div>
      <div>
        <AttendanceTable
          data={tableData}
          errMsg={
            searchParams?.subject && searchParams?.class
              ? "Lớp trên không tồn tại"
              : "Chọn lớp và môn"
          }
        />
      </div>
    </>
  );
};

export default Attendance;
