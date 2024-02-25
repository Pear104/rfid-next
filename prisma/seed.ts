import { db } from "@/lib/prisma";
import {
  admin,
  lecturer,
  classes,
  subject,
  student,
  classInfo,
  attendance,
} from "@/lib/placeholder-data";

import { AttendStatus } from "@prisma/client";

function stringToAttendStatus(value: string): AttendStatus {
  switch (value.toUpperCase()) {
    case "FUTURE":
      return AttendStatus.FUTURE;
    case "PRESENT":
      return AttendStatus.PRESENT;
    case "ABSENT":
      return AttendStatus.ABSENT;
    default:
      return AttendStatus.FUTURE;
  }
}

async function seed() {
  await db.admin.create({ data: admin });
  await Promise.all(lecturer.map((lec) => db.lecturer.create({ data: lec })));
  await Promise.all(classes.map((cl) => db.class.create({ data: cl })));
  await Promise.all(subject.map((sub) => db.subject.create({ data: sub })));
  await Promise.all(student.map((stu) => db.student.create({ data: stu })));
  await Promise.all(
    classInfo.map((info) => db.classInfo.create({ data: info }))
  );
  await Promise.all(
    attendance.map((att) => {
      const [day, month, year] = att.date.split("/").map(Number);
      try {
        return db.attendance.create({
          data: {
            classInfoId: att.classInfoId,
            section: att.section,
            studentId: att.studentId,
            date: new Date(year, month - 1, day).toISOString(),
            attendance: stringToAttendStatus(att.attendance),
          },
        });
      } catch (error) {
        return "Seed data not OK " + error;
      }
    })
  );

  return "Seed data OK";
}
export default seed;
