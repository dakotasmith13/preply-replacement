import { createUser, getUserByEmail } from './queries';
import bcrypt from 'bcrypt';

export async function initUser(
	email: string,
	password: string,
	role: 'user' | 'teacher' | 'admin' = 'user'
) {
	if (!email || !password) {
		throw new Error('Email and password are required');
	}

	// determine if user already exists
	const existingUser = await getUserByEmail(email);

	if (existingUser) {
		throw new Error('User already exists with this email');
	}
	const hashedPassword = await bcrypt.hash(password, 10);

	// Create the user with the specified role
	return createUser(email, hashedPassword, role);
}
