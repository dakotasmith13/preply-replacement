import { useNavigate } from 'react-router-dom';
import '../Nav/Nav.css';

const handleSignout = () => {
	const navigate = useNavigate();

	localStorage.clear();
	navigate('/');
};

const Logout = () => {
	return (
		<button className="logout-button" onClick={handleSignout}>
			Sign out
		</button>
	);
};

export default Logout;
