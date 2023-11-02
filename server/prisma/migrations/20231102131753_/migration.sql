/*
  Warnings:

  - The primary key for the `Monitor` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Monitor` table. All the data in the column will be lost.
  - The primary key for the `MonitorStatus` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `MonitorStatus` table. All the data in the column will be lost.
  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `User` table. All the data in the column will be lost.
  - The required column `uuid` was added to the `Monitor` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uuid` was added to the `MonitorStatus` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - The required column `uuid` was added to the `User` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Monitor" DROP CONSTRAINT "Monitor_ownerId_fkey";

-- DropForeignKey
ALTER TABLE "MonitorStatus" DROP CONSTRAINT "MonitorStatus_monitorId_fkey";

-- AlterTable
ALTER TABLE "Monitor" DROP CONSTRAINT "Monitor_pkey",
DROP COLUMN "id",
ADD COLUMN     "uuid" TEXT NOT NULL,
ALTER COLUMN "ownerId" SET DATA TYPE TEXT,
ADD CONSTRAINT "Monitor_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "MonitorStatus" DROP CONSTRAINT "MonitorStatus_pkey",
DROP COLUMN "id",
ADD COLUMN     "uuid" TEXT NOT NULL,
ALTER COLUMN "monitorId" SET DATA TYPE TEXT,
ADD CONSTRAINT "MonitorStatus_pkey" PRIMARY KEY ("uuid");

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
DROP COLUMN "id",
ADD COLUMN     "uuid" TEXT NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("uuid");

-- AddForeignKey
ALTER TABLE "Monitor" ADD CONSTRAINT "Monitor_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MonitorStatus" ADD CONSTRAINT "MonitorStatus_monitorId_fkey" FOREIGN KEY ("monitorId") REFERENCES "Monitor"("uuid") ON DELETE RESTRICT ON UPDATE CASCADE;
