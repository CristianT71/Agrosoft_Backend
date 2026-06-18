import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColumnaMigracionToAccionCorrectiva1781818588043 implements MigrationInterface {
    name = 'AddColumnaMigracionToAccionCorrectiva1781818588043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accion_correctiva" ADD "columna_migracion" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "accion_ejecutada" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "accion_correctiva" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accion_correctiva" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "accion_ejecutada" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "accion_correctiva" DROP COLUMN "columna_migracion"`);
    }

}
