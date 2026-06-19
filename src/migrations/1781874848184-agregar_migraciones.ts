import { MigrationInterface, QueryRunner } from "typeorm";

export class AgregarMigraciones1781874848184 implements MigrationInterface {
    name = 'AgregarMigraciones1781874848184'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accion_correctiva" ADD "probar_migracion" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "accion_ejecutada" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "accion_correctiva" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accion_correctiva" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "accion_ejecutada" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "accion_correctiva" DROP COLUMN "probar_migracion"`);
    }

}
