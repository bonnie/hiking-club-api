import express from 'express';

import auth from './auth';
import trails from './trails';
import users from './users';

const router = express.Router();

router.get('/', (request, response, next) => {
	response.status(200).json({ message: 'now hiking!' });
});

router.use('/', auth);
router.use('/trails', trails);
router.use('/users', users);

export default router;
