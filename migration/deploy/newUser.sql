-- Deploy wild:newUser to pg

BEGIN;

CREATE FUNCTION new_user(json) RETURNS "user" AS $$
	INSERT INTO "user" (name)
	VALUES (
		$1->>'name'
	)
	RETURNING *;
$$ LANGUAGE sql;

COMMIT;


