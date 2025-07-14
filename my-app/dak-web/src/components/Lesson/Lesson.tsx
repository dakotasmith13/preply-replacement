import './Lesson.css';
import { Lesson as LessonType } from '../../../../sharedTypes/lesson';

const Lesson = ({ lesson }: { lesson: LessonType }) => {
	return (
		<div key={lesson.id} className="lesson">
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
