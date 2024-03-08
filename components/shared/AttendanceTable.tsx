import React from "react";

const AttendanceTable = ({ data, errMsg }: { data: any[]; errMsg: string }) => {
  let rows: any[] = [];
  if (data) {
    const students = Array.from(new Set(data.map((item) => item.studentId)));
    const sections = Array.from(new Set(data.map((item) => item.section)));

    rows = students.map((student) => {
      const currentStudent = data.find(
        (item) => item.student.id == student
      )?.student;
      const attendance = sections.map((section) => {
        const studentData = data.find(
          (info) =>
            info.studentId == currentStudent.id && info.section == section
        );
        let color: string = "yellow";
        switch (studentData?.attendance.toString()) {
          case "FUTURE": {
            color = "yellow";
            break;
          }
          case "PRESENT": {
            color = "green";
            break;
          }
          case "ABSENT": {
            color = "red";
            break;
          }
          default: {
            break;
          }
        }
        return (
          <td
            className={`border-2 border-black font-bold px-2 py-1 text-${color}-500`}
            key={section}
          >
            {studentData?.attendance.toString().toLowerCase()}
          </td>
        );
      });
      return (
        <tr key={currentStudent.id}>
          <td className="border-2 border-black px-2 py-1">
            {currentStudent.id}
          </td>
          <td className="border-2 border-black px-2 py-1">
            {currentStudent.name}
          </td>
          {attendance}
        </tr>
      );
    });
  }
  return (
    <div className="my-4">
      {data ? (
        <table>
          <thead>
            <tr>
              <td className="border-2 border-black px-2 py-1">MSSV</td>
              <td className="border-2 border-black px-2 py-1">Tên</td>
              <td className="border-2 border-black px-2 py-1">1</td>
              <td className="border-2 border-black px-2 py-1">2</td>
            </tr>
          </thead>
          <tbody>{rows.map((row) => row)}</tbody>
        </table>
      ) : (
        errMsg
      )}
    </div>
  );
};

export default AttendanceTable;
