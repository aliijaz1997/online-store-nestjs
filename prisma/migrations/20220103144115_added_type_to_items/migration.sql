/*
  Warnings:

  - Added the required column `type` to the `Item` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Item" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "price" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "inCart" BOOLEAN
);
INSERT INTO "new_Item" ("id", "inCart", "name", "price") SELECT "id", "inCart", "name", "price" FROM "Item";
DROP TABLE "Item";
ALTER TABLE "new_Item" RENAME TO "Item";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
