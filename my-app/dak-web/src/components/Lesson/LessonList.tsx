import Lesson from './Lesson';
import { Lesson as LessonType } from '../../../../sharedTypes/lesson';
import '../Home/Home.css';

const LessonList = ({ lessons }: { lessons: LessonType[] }) => {
	return (
		<div className="lesson-list">
			{lessons.map((item) => (
				<Lesson lesson={item} />
			))}
		</div>
	);
};

export default LessonList;
