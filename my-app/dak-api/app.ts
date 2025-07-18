import express from 'express';
import authRouter from './auth/routes';
import lessonRouter from './lessons/routes';
import userRouter from './users/routes';
import cors from 'cors';

const app = express();
app.use(express.json());

const corsOptions = {
	credentials: true,
	allowedHeaders: ['Content-Type', 'Authorization'],
	origin: ['http://localhost:3030', 'http://localhost:5173'],
};

app.use(cors(corsOptions));
app.use('/login', authRouter);
app.use('/lessons', lessonRouter);
app.use('/users', userRouter);

app.listen(3030, () => {
	console.log('Server running on port 3030');
});
