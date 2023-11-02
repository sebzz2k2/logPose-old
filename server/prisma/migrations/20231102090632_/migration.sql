-- CreateTable
CREATE TABLE "MonitorStatus" (
    "id" SERIAL NOT NULL,
    "status" BOOLEAN NOT NULL,
    "lastCheck" TIMESTAMP(3) NOT NULL,
    "monitorId" INTEGER NOT NULL,

    CONSTRAINT "MonitorStatus_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MonitorStatus" ADD CONSTRAINT "MonitorStatus_monitorId_fkey" FOREIGN KEY ("monitorId") REFERENCES "Monitor"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
