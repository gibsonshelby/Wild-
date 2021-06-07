-- Revert wild:createtable from pg

BEGIN;

DROP TABLE "user"; 

COMMIT;
