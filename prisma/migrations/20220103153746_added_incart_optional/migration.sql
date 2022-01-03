/*
  Warnings:

  - Made the column `inCart` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "inCart" BOOLEAN NOT NULL
);
INSERT INTO "new_Item" ("id", "inCart", "name", "price", "type") SELECT "id", "inCart", "name", "price", "type" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
