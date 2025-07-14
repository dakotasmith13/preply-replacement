import './Home.css';
import Nav from '../Nav/Nav';
import LessonList from '../Lesson/LessonList';
import { useGetUserLessons } from './hooks/useUserLessons';

const Home = () => {
	const {
		data: userLessons,
		isLoading,
		isError,
	} = useGetUserLessons({
		userId: '54321',
	});

	return (
		<div className="home">
			<div className="content">
				<h1>Upcoming Lessons</h1>
				{isLoading && <p>Loading...</p>}
				{isError && <p>Oops!</p>}
				{!userLessons?.length && <p>No lessons found.</p>}
				{!isLoading && userLessons?.length && (
					<LessonList lessons={userLessons} />
				)}
			</div>
		</div>
	);
};

export default Home;
