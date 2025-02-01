export async function login({
	username,
	password,
}: {
	username: string;
	password: string;
}) {
	const options = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username,
			password,
		}),
	};

	return fetch('http://localhost:3030/login', options);
}
