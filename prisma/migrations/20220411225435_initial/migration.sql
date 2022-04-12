/*
  Warnings:

  - You are about to alter the column `content` on the `Post` table. The data in that column could be lost. The data in that column will be cast from `VarChar(148)` to `VarChar(140)`.

*/
-- AlterTable
ALTER TABLE "Post" ALTER COLUMN "content" SET DATA TYPE VARCHAR(140);
