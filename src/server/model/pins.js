import database from './database';

export function createPin(journalId, latitude, longitude, comment) {
	return database.one(`
	`, [journalId, latitude, longitude, comment]);
}

export function getAllPinsByJournalId(id) {
	return database.any(`
	`, [id]);
}

export function getPinById(id) {
	return database.one(`
	`, [id]);
}

export function updatePin(id, journalId, latitude, longitude, comment) {
	return database.one(`
	`, [id, journalId, latitude, longitude, comment]);
}

export function deletePin(id) {
	return database.one(`
	`, [id]);
}
