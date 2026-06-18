import { MigrationInterface, QueryRunner } from "typeorm";

export class AgroSoftInit1781817290103 implements MigrationInterface {
    name = 'AgroSoftInit1781817290103'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accion_ejecutada" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
        await queryRunner.query(`ALTER TABLE "accion_correctiva" ALTER COLUMN "id" SET DEFAULT uuid_generate_v4()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "accion_correctiva" ALTER COLUMN "id" DROP DEFAULT`);
        await queryRunner.query(`ALTER TABLE "accion_ejecutada" ALTER COLUMN "id" DROP DEFAULT`);
    }

}
