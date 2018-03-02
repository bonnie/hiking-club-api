import database from './database';

export function createReview(trailId, userId, rating, comment) {
	return database.one(`
	`, [trailId, userId, rating, comment]);
}

export function getAllReviewsByTrailId(id) {
	return database.any(`
	`, [id]);
}

export function getAllReviewsByUserId(id) {
	return database.any(`
	`, [id]);
}

export function getReviewById(id) {
	return database.one(`
	`, [id]);
}

export function updateReview(id, trailId, userId, rating, comment) {
	return database.one(`
	`, [id, trailId, userId, rating, comment]);
}

export function deleteReview(id) {
	return database.one(`
	`, [id]);
}
