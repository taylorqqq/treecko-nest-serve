/*
  Warnings:

  - The primary key for the `treecko_article` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `treecko_article` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.
  - You are about to alter the column `categoryId` on the `treecko_article` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.
  - The primary key for the `treecko_category` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `treecko_category` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.
  - The primary key for the `treecko_user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `treecko_user` table. The data in that column could be lost. The data in that column will be cast from `UnsignedBigInt` to `UnsignedInt`.

*/
-- DropForeignKey
ALTER TABLE `treecko_article` DROP FOREIGN KEY `treecko_article_categoryId_fkey`;

-- AlterTable
ALTER TABLE `treecko_article` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    MODIFY `categoryId` INTEGER UNSIGNED NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `treecko_category` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `treecko_user` DROP PRIMARY KEY,
    MODIFY `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `treecko_article` ADD CONSTRAINT `treecko_article_categoryId_fkey` FOREIGN KEY (`categoryId`) REFERENCES `treecko_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
