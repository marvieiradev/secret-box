import type { Knex } from 'knex';

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            database: 'secretbox',
            user: 'postgres',
            password: 'postgres'
        },
        migrations: {
            directory: './migrations'
        }
    },
    production: {
        client: 'pg',
        connection: {
            host: 'localhost',
            database: 'secretbox',
            user: 'postgres',
            password: 'postgres'
        },
        migrations: {
            directory: './migrations'
        }
    },
}

export default config;