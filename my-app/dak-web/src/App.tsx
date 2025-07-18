import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { LessonPage } from './components/Lesson/LessonPage';
import { ScheduleLesson } from './components/Schedule/ScheduleLesson';
import { CreateAccount } from './components/Login/CreateAccount';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './ProtectedRoute';

const queryClient = new QueryClient();

const router = createBrowserRouter([
	{
		path: '/',
		children: [
			{
				index: true,
				element: <Login />,
			},
			{ path: '/create-account', element: <CreateAccount /> },
			{
				element: <ProtectedRoute />,
				children: [
					{ path: '/home', element: <Home /> },
					{ path: '/lessons', element: <LessonPage /> },
					{ path: '/schedule', element: <ScheduleLesson /> },
				],
			},
		],
	},
]);

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
		</QueryClientProvider>
	);
};

export default App;
