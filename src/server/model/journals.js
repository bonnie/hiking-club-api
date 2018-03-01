import database from './database';

export function createJournal(trailId, userId, title, entry) {
	return database.one(`
	`, [trailId, userId, title, entry]);
}

export function getAllJournalsByTrailId(id) {
	return database.any(`
	`, [id]);
}

export function getAllJournalsByUserId(id) {
	return database.any(`
	`, [id]);
}

export function getJournalByTrailId(id) {
	return database.one(`
	`, [id]);
}

export function getJournalByUserId(id) {
	return database.one(`
	`, [id]);
}

export function updateJournal(id, trailId, userId, title, entry) {
	return database.one(`
	`, [id, trailId, userId, title, entry]);
}

export function deleteJournal(id) {
	return database.one(`
	`, [id]);
}
