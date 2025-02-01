import express, { Request, Response } from 'express';
const router = express.Router();

import { validationResult } from 'express-validator';
import { formatDate } from './utils';

router.get('/', async (req: Request, res: Response) => {
	const errors = validationResult(req);
	const { userId } = req.query;
	console.log('userId', userId);

	if (!userId || !errors.isEmpty()) {
		res.status(400).json({ error: 'User does not exist.' });
	}

	// const lessons = await getUserLessons(userId);

	const date2 = new Date(new Date().setMonth(3));
	const date3 = new Date(new Date().setMonth(4));
	const lessons = [
		{ id: '1', date: formatDate(new Date()), link: 'https://test.com' },
		{ id: '2', date: formatDate(date2), link: 'https://test.com' },
		{ id: '3', date: formatDate(date3), link: 'https://test.com' },
	];

	res.status(200).json({ message: 'success', data: lessons });
});

export default router;
