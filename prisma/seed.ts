import prisma from "@/lib/prisma";
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
  await prisma.admin.create({ data: admin });
  await Promise.all(
    lecturer.map((lec) => prisma.lecturer.create({ data: lec }))
  );
  await Promise.all(classes.map((cl) => prisma.class.create({ data: cl })));
  await Promise.all(subject.map((sub) => prisma.subject.create({ data: sub })));
  await Promise.all(student.map((stu) => prisma.student.create({ data: stu })));
  await Promise.all(
    classInfo.map((info) => prisma.classInfo.create({ data: info }))
  );
  await Promise.all(
    attendance.map((att) => {
      const [day, month, year] = att.date.split("/").map(Number);
      try {
        return prisma.attendance.create({
          data: {
            classInfoId: att.classInfoId,
            section: att.section,
            studentId: att.studentId,
            date: new Date(year, month - 1, day).toISOString(),
            attendance: stringToAttendStatus(att.attendance),
          },
        });
      } catch (error) {
        console.log(error);
      }
    })
  );

  return "Seed data OK";
}
export default seed;
