import database from './database';

export function createReview(trailId, userId, rating, comment) {
	return database.one(`
		INSERT INTO reviews
		VALUES ($1, $2, $3, $4)
		RETURNING *;`, [trailId, userId, rating, comment]);
}

export function getAllReviewsByTrailId(id) {
	return database.any(`
		SELECT *
		FROM reviews
		WHERE trail_id = $1;`, [id]);
}

export function getAllReviewsByUserId(id) {
	return database.any(`
		SELECT *
		FROM reviews
		WHERE user_id = $1;`, [id]);
}

export function getReviewById(id) {
	return database.one(`
		SELECT *
		FROM reviews
		WHERE id = $1;`, [id]);
}

export function updateReview(id, trailId, userId, rating, comment) {
	return database.one(`
		UPDATE reviews
		SET trail_id = $2,
				user_id = $3,
				rating = $4,
				comment = $5,
		WHERE id = $1
		RETURNING *;`, [id, trailId, userId, rating, comment]);
}

export function deleteReview(id) {
	return database.one(`
		DELETE FROM reviews
		WHERE id = $1
		RETURNING *;`, [id]);
}
