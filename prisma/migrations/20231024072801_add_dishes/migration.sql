-- AlterTable
ALTER TABLE `Restaurant` ADD COLUMN `averageCost` INTEGER NULL;

-- CreateTable
CREATE TABLE `Dish` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `img` TEXT NOT NULL,
    `description` TEXT NOT NULL,
    `price` DOUBLE NOT NULL,
    `restaurantId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Dish` ADD CONSTRAINT `Dish_restaurantId_fkey` FOREIGN KEY (`restaurantId`) REFERENCES `Restaurant`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
