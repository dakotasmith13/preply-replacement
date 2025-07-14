import Login from './components/Login/Login';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Nav from './components/Nav/Nav';
import { LessonPage } from './components/Lesson/LessonPage';
import { ScheduleLesson } from './components/Schedule/ScheduleLesson';
import { CreateAccount } from './components/Login/CreateAccount';

const queryClient = new QueryClient();

const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<Router>
				<div>
					<Nav />
				</div>
				<Routes>
					<Route path="/" element={<Login />} />
					<Route path="/home" element={<Home />} />
					<Route path="/lessons" element={<LessonPage />} />
					<Route path="/schedule" element={<ScheduleLesson />} />
					<Route path="/create-account" element={<CreateAccount />} />
				</Routes>
			</Router>
		</QueryClientProvider>
	);
};

export default App;
