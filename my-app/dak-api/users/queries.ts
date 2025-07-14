import db from '../database/db';

export function createUser(
	email: string,
	password: string,
	role: 'user' | 'teacher' | 'admin'
) {
	return db('users')
		.insert({
			email,
			password,
			role,
		})
		.returning('*');
}

export function getUserByEmail(email: string) {
	return db('users').select('*').where({ email }).first();
}
