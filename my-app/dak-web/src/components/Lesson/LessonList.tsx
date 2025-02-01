import React from 'react';
import Lesson from './Lesson';
import '../Home/Home.css';

const LessonList = ({ lessons }: { lessons: Lesson[] }) => {
	return (
		<div className="data-list">
			{lessons.map((item) => (
				<Lesson lesson={item} />
			))}
		</div>
	);
};

export default LessonList;
