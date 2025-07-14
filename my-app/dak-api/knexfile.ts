import { Knex } from 'knex';
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });

const config: { [key: string]: Knex.Config } = {
	development: {
		client: 'pg',
		connection: {
			host: process.env.DB_HOST,
			port: Number(process.env.DB_PORT || 5432),
			user: process.env.DB_USER,
			password: process.env.DB_PASSWORD,
			database: process.env.DB_NAME,
			ssl: { rejectUnauthorized: false },
		},
		migrations: {
			directory: './database/migrations',
			extension: 'ts',
		},
		seeds: {
			directory: './database/seeds',
			extension: 'ts',
		},
	},

	staging: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},

	production: {
		client: 'postgresql',
		connection: {
			database: 'my_db',
			user: 'username',
			password: 'password',
		},
		pool: {
			min: 2,
			max: 10,
		},
		migrations: {
			tableName: 'knex_migrations',
		},
	},
};

export default config;
