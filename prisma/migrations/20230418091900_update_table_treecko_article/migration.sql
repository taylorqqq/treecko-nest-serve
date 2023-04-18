/*
  Warnings:

  - Made the column `treecko_categoryId` on table `treecko_article` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `treecko_article` DROP FOREIGN KEY `treecko_article_treecko_categoryId_fkey`;

-- AlterTable
ALTER TABLE `treecko_article` MODIFY `treecko_categoryId` BIGINT UNSIGNED NOT NULL;

-- AddForeignKey
ALTER TABLE `treecko_article` ADD CONSTRAINT `treecko_article_treecko_categoryId_fkey` FOREIGN KEY (`treecko_categoryId`) REFERENCES `treecko_category`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
