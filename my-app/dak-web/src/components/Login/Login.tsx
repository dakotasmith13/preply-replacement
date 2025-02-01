import React, { FormEvent, useState } from 'react';
import './Login.css';
import { login } from '../../../api/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		try {
			const response = await login({ username, password });
			const data = await response.json();
			localStorage.setItem('authToken', data.token);

			if (response.ok) {
				navigate('/home');
			} else {
				const errorData = await response.json();
				setError(errorData.error || 'Login failed');
			}
		} catch (err) {
			setError(err);
		}
	};

	return (
		<body>
			<div className="login-container">
				<div className="login-box">
					<h2>Login</h2>
					<form action="#" method="post" onSubmit={handleSubmit}>
						<div className="textbox">
							<input
								type="text"
								placeholder="Username"
								name="username"
								onChange={(e) => setUsername(e.target.value)}
								required
							/>
						</div>
						<div className="textbox">
							<input
								type="password"
								placeholder="Password"
								name="password"
								onChange={(e) => setPassword(e.target.value)}
								required
							/>
						</div>
						<button type="submit" className="btn">
							Login
						</button>
						{error && <p>{error}</p>}
						<div className="footer">
							<a href="#">Forgot password?</a>
							<a href="#">Create an account</a>
						</div>
					</form>
				</div>
			</div>
		</body>
	);
};

export default Login;
