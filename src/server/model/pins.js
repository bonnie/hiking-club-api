import database from './database';

export function createPin(journalId, latitude, longitude, comment) {
	return database.one(`
		INSERT INTO pins
		VALUES ($1, $2, $3, $4)
		RETURNING *;`, [journalId, latitude, longitude, comment]);
}

export function getAllPinsByJournalId(id) {
	return database.any(`
		SELECT *
		FROM pins
		WHERE journal_id = $1;`, [id]);
}

export function getPinById(id) {
	return database.one(`
		SELECT *
		FROM pins
		WHERE id = $1;`, [id]);
}

export function updatePin(id, journalId, latitude, longitude, comment) {
	return database.one(`
		UPDATE pins
		SET journal_id = $1,
				latitude = $2,
				longitude = $3,
				comment = $4,
		WHERE id = $1
		RETURNING *;`, [id, journalId, latitude, longitude, comment]);
}

export function deletePin(id) {
	return database.one(`
		DELETE FROM pins
		WHERE id = $1
		RETURNING *;`, [id]);
}
