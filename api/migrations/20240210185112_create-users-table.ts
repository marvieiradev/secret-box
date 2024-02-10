import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    //criar no banco de dados a tabela user
    /*return knex.schema.createTable('users', (table) => {
        table.uuid('userId')
    });*/
}


export async function down(knex: Knex): Promise<void> {
}

