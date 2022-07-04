import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class updatePrimaryKeys1656777656081 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.updatePrimaryKeys("users", [
            new TableColumn({ name: "id", type: "uuid", isPrimary: true }),
         ]);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("users");
    }

}
