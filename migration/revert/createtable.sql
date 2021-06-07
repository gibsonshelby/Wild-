-- Revert wild:createtable from pg

BEGIN;

DROP table "user" ; 

COMMIT;
