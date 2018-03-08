import database from './database';

export function createJournal(trailId, userId, title, entry) {
	return database.one(`
		INSERT INTO journals
		VALUES ($1, $2, $3, $4)
		RETURNING *:`, [trailId, userId, title, entry]);
}

export function getAllJournalsByTrailId(id) {
	return database.any(`
		SELECT *
		FROM journals
		WHERE trail_id = $1;`, [id]);
}

export function getAllJournalsByUserId(id) {
	return database.any(`
		SELECT *
		FROM journals
		WHERE user_id = $1;`, [id]);
}

export function getJournalById(id) {
	return database.one(`
		SELECT *
		FROM journals
		WHERE id = $1;`, [id]);
}

export function updateJournal(id, trailId, userId, title, entry) {
	return database.one(`
		UPDATE journals
		SET trail_id = $1,
				user_id = $2,
				title = $3,
				entry = $4,
		WHERE id = $1
		RETURNING *;`, [id, trailId, userId, title, entry]);
}

export function deleteJournal(id) {
	return database.one(`
		DELETE FROM journals
		WHERE id = $1
		RETURNING *;`, [id]);
}
