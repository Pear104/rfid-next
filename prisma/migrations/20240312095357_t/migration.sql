-- CreateTable
CREATE TABLE "BikeParking" (
    "id" INTEGER NOT NULL,
    "studentId" TEXT NOT NULL,
    "time" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BikeParking_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BikeParking" ADD CONSTRAINT "BikeParking_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
