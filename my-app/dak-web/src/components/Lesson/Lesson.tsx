import React from 'react';

const Lesson = ({ lesson }: { lesson: Lesson }) => {
	return (
		<div key={lesson.id} className="data=item">
			<h2>{lesson.date}</h2>
			{lesson.link && (
				<a href={lesson.link} target="_blank">
					Join lesson
				</a>
			)}
		</div>
	);
};

export default Lesson;
