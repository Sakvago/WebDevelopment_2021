import { Migration } from '@mikro-orm/migrations';

export class Migration20221121132300 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "dog" ("id" serial primary key, "name" varchar(255) not null, "age" double precision not null);');
  }

  async down(): Promise<void> {
    this.addSql('drop table if exists "dog" cascade;');
  }

}
