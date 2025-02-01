import express, { Request, Response } from 'express';
const router = express.Router();

import { body, validationResult } from 'express-validator';

router.post(
	'/',
	[body('username').isString()],
	(req: Request, res: Response) => {
		const errors = validationResult(req);
		const { username } = req.body;

		if (!username || !errors.isEmpty()) {
			res.status(401).json({ error: 'Username is required.' });
		}

		res.status(200).json({ message: 'success', token: 'mock-token' });
	}
);

export default router;
