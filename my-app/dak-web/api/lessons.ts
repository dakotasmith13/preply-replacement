export async function getUserLessons(userId: string) {
	const token = localStorage.getItem('authToken');

	const options = {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	};

	return fetch(
		`http://localhost:3030/lessons?userId=${encodeURIComponent(userId)}`,
		options
	);
}
