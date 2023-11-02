/*
  Warnings:

  - A unique constraint covering the columns `[name,url]` on the table `Monitor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Monitor_name_url_key" ON "Monitor"("name", "url");
