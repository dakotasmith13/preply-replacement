export type User = {
	id: string;
	email: string;
	name: string;
	role: 'user' | 'teacher' | 'admin';
	createdAt: string;
	updatedAt: string;
};
