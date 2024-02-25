import React from "react";

import SelectField from "@/components/shared/SelectField";
import useFetch from "@/lib/useFetch";
import AttendanceTable from "@/components/shared/AttendanceTable";

const Attendance = async ({
  searchParams,
}: {
  searchParams?: { subject?: string; class?: string };
}) => {
  const subject = await useFetch("/api/subject");
  const classes = await useFetch("/api/class");
  let tableData: any = null;
  if (searchParams?.subject && searchParams?.class) {
    tableData = await useFetch(
      `/api/classInfo?subject=${searchParams?.subject}&class=${searchParams?.class}`
    );
  }
  return (
    <>
      <div className="font-bold text-2xl">Attendance</div>
      <div className="flex gap-4 mt-2">
        <SelectField label="Subject" items={subject} field="id" />
        <SelectField label="Class" items={classes} field="id" />
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
