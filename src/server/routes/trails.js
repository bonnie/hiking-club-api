import express from 'express';
import {
	getAllTrails,
	getTrailById,
} from '../../server/model/trails';
import {
	createReview,
	getAllReviewsByTrailId,
	getReviewById,
	updateReview,
	deleteReview,
} from '../../server/model/reviews';

const router = express.Router();

router.get('/', (request, response, next) => {
	return getAllTrails()
		.then((trails) => {
			response.status(200).json(trails);
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/:id', (request, response, next) => {
	const { id } = request.params;

	return getTrailById(id)
		.then((trail) => {
			response.status(200).json(trail);
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/:id/reviews', (request, response, next) => {
	const { id } = request.params;

	return getAllReviewsByTrailId(id)
		.then((reviews) => {
			response.status(200).json(reviews);
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/:id/reviews', (request, response, next) => {
	const { id } = request.params;
	const {
		userId,
		rating,
		comment,
	} = request.body;

	return createReview(id, userId, rating, comment)
		.then((review) => {
			response.status(200).json(review);
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/:trailId/reviews/:reviewId', (request, response, next) => {
	const {
		reviewId,
	} = request.params;

	return getReviewById(reviewId)
		.then((review) => {
			response.status(200).json(review);
		})
		.catch((error) => {
			next(error);
		});
});

router.put('/:trailId/reviews/:reviewId', (request, response, next) => {
	const {
		trailId,
		reviewId,
	} = request.params;
	const {
		userId,
		rating,
		comment,
	} = request.body;

	return updateReview(reviewId, trailId, userId, rating, comment)
		.then((review) => {
			response.status(200).json(review);
		})
		.catch((error) => {
			next(error);
		});
});

router.delete('/:trailId/reviews/:reviewId', (request, response, next) => {
	const {
		trailId,
		reviewId,
	} = request.params;

	return deleteReview(reviewId)
		.then((review) => {
			response.status(200).json(review);
		})
		.catch((error) => {
			next(error);
		});
});

export default router;
