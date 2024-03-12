-- AlterTable
CREATE SEQUENCE bikeparking_id_seq;
ALTER TABLE "BikeParking" ALTER COLUMN "id" SET DEFAULT nextval('bikeparking_id_seq');
ALTER SEQUENCE bikeparking_id_seq OWNED BY "BikeParking"."id";
