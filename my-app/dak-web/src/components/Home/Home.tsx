import React, { useEffect, useState } from 'react';
import './Home.css';
import Nav from '../Nav/Nav';
import Logout from '../Logout/Logout';
import { getUserLessons } from '../../../api/lessons';
import LessonList from '../Lesson/LessonList';

const Home = () => {
	const [data, setData] = useState<Lesson[]>([]);
	const [loading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			console.log('in fetch data');
			try {
				const response = await getUserLessons('54321');
				console.log('response', response);
				if (!response.ok) {
					throw new Error('Unable to fetch lessons.');
				}
				const lessons = await response.json();
				setData(lessons.data);
			} catch (err) {
				console.log('in error', err);
				setError(err.error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="home">
			<Nav />
			<div className="content">
				<h1>Upcoming Lessons</h1>
				{loading && <p>Loading...</p>}
				{error && <p>{error}</p>}
				{!loading && !error && data.length > 0 && <LessonList lessons={data} />}
			</div>
			<Logout />
		</div>
	);
};

export default Home;
