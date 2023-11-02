/*
  Warnings:

  - A unique constraint covering the columns `[name,url,ownerId]` on the table `Monitor` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "Monitor_name_url_key";

-- CreateIndex
CREATE UNIQUE INDEX "Monitor_name_url_ownerId_key" ON "Monitor"("name", "url", "ownerId");
