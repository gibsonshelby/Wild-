-- Revert wild:newUser from pg

BEGIN;

DROP FUNCTION new_user(json);

COMMIT;
