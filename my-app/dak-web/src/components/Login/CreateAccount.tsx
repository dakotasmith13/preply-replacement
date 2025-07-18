import { createUser } from '../../../api/users';
import { useMutation } from '@tanstack/react-query';
import { useForm } from '@tanstack/react-form';
import { useNavigate } from 'react-router-dom';
import './CreateAccount.css';

export const CreateAccount = () => {
	const navigate = useNavigate();

	const mutation = useMutation({
		mutationFn: async ({
			email,
			password,
			role,
			name,
		}: {
			email: string;
			password: string;
			role: 'user' | 'teacher' | 'admin';
			name: string;
		}) => {
			const response = await createUser(email, password, name, role);
			if (!response.ok) {
				throw new Error('Failed to create user');
			}
			return response.json();
		},
	});

	const form = useForm({
		defaultValues: {
			email: '',
			password: '',
			role: 'user' as 'user' | 'teacher' | 'admin',
			name: '',
		},
		onSubmit: async ({ value }) => {
			try {
				const res = await mutation.mutateAsync(value);

				if (res) {
					navigate('/login', { replace: true });
				}
			} catch (error) {
				console.error('Error creating user:', error);
			}
		},
	});

	return (
		<div>
			<h1 className="formTitle">Create Account</h1>
			<div className="formWrapper">
				<form onSubmit={form.handleSubmit}>
					{form.Field({
						name: 'name',
						children: (field) => (
							<div className="inputWrapper">
								<label className="formLabel">Name</label>
								<input
									className="formField"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
							</div>
						),
					})}
					{form.Field({
						name: 'email',
						children: (field) => (
							<div className="inputWrapper">
								<label className="formLabel">Email</label>
								<input
									className="formField"
									type="email"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
							</div>
						),
					})}
					{form.Field({
						name: 'password',
						children: (field) => (
							<div className="inputWrapper">
								<label className="formLabel">Password</label>
								<input
									className="formField"
									type="password"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) => field.handleChange(e.target.value)}
								/>
							</div>
						),
					})}
					{form.Field({
						name: 'role',
						children: (field) => (
							<div className="inputWrapper">
								<label className="formLabel">What are you?</label>
								<select
									className="formField"
									value={field.state.value}
									onBlur={field.handleBlur}
									onChange={(e) =>
										field.handleChange(e.target.value as 'user' | 'teacher')
									}
								>
									<option value="user">User</option>
									<option value="teacher">Teacher</option>
								</select>
							</div>
						),
					})}
					<button
						type="submit"
						disabled={mutation.isPending}
						className="submitButton"
					>
						Create Account
					</button>
				</form>
				{mutation.isError && (
					<p className="errorMessage">{mutation.error.message}</p>
				)}
			</div>
		</div>
	);
};
