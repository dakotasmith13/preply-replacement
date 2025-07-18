import express, { Request, Response } from 'express';
const router = express.Router();

import { body, validationResult } from 'express-validator';
import { initUser } from './services';

//**********************
// User Routes /users
//**********************

router.post(
	'/create-account',
	[
		body('email').isEmail(),
		body('password').isLength({ min: 6 }),
		body('role').isIn(['student', 'teacher']),
		body('name').isString().notEmpty(),
	],
	async (req: Request, res: Response) => {
		const errors = validationResult(req);
		const { email, password, role, name } = req.body;

		if (!errors.isEmpty()) {
			res.status(400).json({ error: 'Invalid input' });
			return;
		}

		// create user account
		try {
			const user = await initUser(email, password, name, role);
			res
				.status(201)
				.json({ message: 'Account created successfully', data: user });
			return;
		} catch (error) {
			console.log('Error creating user:', error);
			res.status(400).json({ error: 'Error creating user' });
			return;
		}
	}
);

export default router;
