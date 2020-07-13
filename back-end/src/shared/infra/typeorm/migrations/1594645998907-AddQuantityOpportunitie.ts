import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export default class AddQuantityOpportunitie1594645998907 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn('opportunities', new TableColumn({
      name: 'quantity',
      type: 'int',
      isNullable: true,
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('opportunities', 'quantity');
  }
}
