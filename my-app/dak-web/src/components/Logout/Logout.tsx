import React from 'react';
import { useNavigate } from 'react-router-dom';

const handleSignout = () => {
	const navigate = useNavigate();

	localStorage.clear();
	navigate('/');
};

const Logout = () => {
	return <button onClick={handleSignout}>Sign out</button>;
};

export default Logout;
