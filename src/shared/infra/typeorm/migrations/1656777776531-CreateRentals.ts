import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateRentals1656777776531 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

        await queryRunner.createTable(
            new Table({
              name: "rentals",
              columns: [
                { name: "id", type: "uuid", isPrimary: true },
                {
                  name: "car_id",
                  type: "uuid",
                  default: "uuid_generate_v4()",
                },
                {
                  name: "user_id",
                  type: "uuid",
                  default: "uuid_generate_v4()",

                },
                {
                  name: "start_date",
                  type: "timestamp",
                  default: "now()",
                },
      
                {
                  name: "end_date",
                  type: "timestamp",
                  isNullable: true,
                },
                {
                  name: "expected_return_date",
                  type: "timestamp",
                },
                {
                  name: "total",
                  type: "numeric",
                  isNullable: true,
                },
                {
                  name: "created_at",
                  type: "timestamp",
                  default: "now()",
                },
                {
                  name: "updated_at",
                  type: "timestamp",
                  default: "now()",
                },
              ],
              foreignKeys: [
                {
                  name: "FKCarRental",
                  referencedTableName: "Cars",
                  referencedColumnNames: ["id"],
                  columnNames: ["car_id"],
                  onDelete: "SET NULL",
                  onUpdate: "SET NULL",
                },
                {
                  name: "FKUserRental",
                  referencedTableName: "users",
                  referencedColumnNames: ["id"],
                  columnNames: ["user_id"],
                  onDelete: "SET NULL",
                  onUpdate: "SET NULL",
                },
              ],
            }) 
          );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("rentals");
    }

}
