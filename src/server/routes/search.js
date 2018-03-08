import express from 'express';
import { searchTrailsByName } from '../model/trails';

const router = express.Router();

router.post('/trails', (request, response, next) => {
	const {
		name,
	} = request.query;

	return searchTrailsByName(name)
		.then((foundTrails) => {
			response.status(200).json(foundTrails);
		})
		.catch((error) => {
			next(error);
		});
});

export default router;
