import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('users', (table) => {
		table.uuid('id').primary().defaultTo(knex.raw('gen_random_uuid()'));
		table.string('name').notNullable();
		table.string('email').notNullable().unique();
		table.string('password').notNullable();
		table.timestamps(true, true);
		table
			.enum('role', ['user', 'teacher', 'admin'])
			.defaultTo('user')
			.notNullable();
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists('users');
}
