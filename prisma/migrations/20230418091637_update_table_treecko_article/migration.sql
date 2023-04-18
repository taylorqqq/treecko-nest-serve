-- AlterTable
ALTER TABLE `treecko_article` ADD COLUMN `treecko_categoryId` BIGINT UNSIGNED NULL;

-- AddForeignKey
ALTER TABLE `treecko_article` ADD CONSTRAINT `treecko_article_treecko_categoryId_fkey` FOREIGN KEY (`treecko_categoryId`) REFERENCES `treecko_category`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
