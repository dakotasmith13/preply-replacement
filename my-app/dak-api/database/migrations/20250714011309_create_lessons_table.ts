import type { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('lessons', (table) => {
		table.increments('id').primary();
		table.date('date').notNullable();
		table.string('link').nullable();
		table
			.uuid('student_id')
			.notNullable()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
		table
			.uuid('teacher_id')
			.notNullable()
			.references('id')
			.inTable('users')
			.onDelete('CASCADE');
		table.timestamps(true, true);
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTableIfExists('lessons');
}
