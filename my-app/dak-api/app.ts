import express from 'express';
import authRouter from './auth/routes';
import lessonRouter from './lessons/routes';
import userRouter from './users/routes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
app.use('/login', authRouter);
app.use('/lessons', lessonRouter);
app.use('/users', userRouter);

app.listen(3030, () => {
	console.log('Server running on port 3030');
});
