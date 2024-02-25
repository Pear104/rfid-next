/*
  Warnings:

  - The primary key for the `Attendance` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[classInfoId,studentId,section]` on the table `Attendance` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Attendance" DROP CONSTRAINT "Attendance_pkey",
ALTER COLUMN "classInfoId" DROP DEFAULT;
DROP SEQUENCE "Attendance_classInfoId_seq";

-- CreateIndex
CREATE INDEX "Attendance_classInfoId_studentId_section_idx" ON "Attendance"("classInfoId", "studentId", "section");

-- CreateIndex
CREATE UNIQUE INDEX "Attendance_classInfoId_studentId_section_key" ON "Attendance"("classInfoId", "studentId", "section");
