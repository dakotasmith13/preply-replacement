import Nav from './components/Nav/Nav';
import { useAuth } from './context/AuthContext';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {
	const { user, isLoading } = useAuth();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		return <Navigate to="/" replace />;
	}

	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
};

export default ProtectedRoute;
