-- Deploy wild:createtable to pg

BEGIN;



-- -----------------------------------------------------
-- Table `wild`.`User`
-- -----------------------------------------------------
CREATE TABLE "user" (
    "id" int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"  VARCHAR(25) NOT NULL UNIQUE
  );


COMMIT;


