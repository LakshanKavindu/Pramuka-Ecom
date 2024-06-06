/*
  Warnings:

  - You are about to drop the column `createAt` on the `cart` table. All the data in the column will be lost.
  - You are about to drop the column `createAt` on the `order` table. All the data in the column will be lost.
  - Added the required column `image` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cart` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `order` DROP COLUMN `createAt`,
    ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `user` ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `role` ENUM('ADMIN', 'USER') NOT NULL DEFAULT 'USER',
    MODIFY `phoneNo` VARCHAR(191) NULL;
