export async function createUser(
	email: string,
	password: string,
	name: string,
	role: 'user' | 'teacher' | 'admin' = 'user'
) {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			email,
			password,
			name,
			role,
		}),
	};
	return fetch('http://localhost:3030/users', {
		...options,
		credentials: 'include',
	});
}
