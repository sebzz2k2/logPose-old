/*
  Warnings:

  - A unique constraint covering the columns `[monitorId]` on the table `MonitorStatus` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `lastUp` to the `MonitorStatus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "MonitorStatus" ADD COLUMN     "lastUp" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "MonitorStatus_monitorId_key" ON "MonitorStatus"("monitorId");
