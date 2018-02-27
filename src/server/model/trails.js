import database from './database';

export function getAllTrails() {
	return database.any(`
		SELECT *
		FROM trails
	`);
}

export function getTrailById(id) {
	return database.one(`
		SELECT *
		FROM trails
		WHERE id = $1`, [id]);
}

export function createTrail(name, latitude, longitude, distance, duration, elevation, trailImage) {
	return database.one(`
		INSERT INTO trails(name, latitude, longitude, distance, duration, elevation, trail_image)
		VALUES ($1, $2, $3, $4, $5, $6, $7)
		RETURNING *;`, [name, latitude, longitude, distance, duration, elevation, trailImage]);
}

export function updateTrail(id, name, latitude, longitude, distance, duration, elevation, trailImage) {
	return database.one(`
		UPDATE trails
		SET name = $2,
				latitude = $3,
				longitude = $4,
				distance = $5,
				duration = $6,
				elevation = $7,
				trail_image = $8
		WHERE id = $1`, [id, name, latitude, longitude, distance, duration, elevation, trailImage]);
}

export function searchTrailsByName(query) {
	return database.any(`
		SELECT *
		FROM trails
		WHERE lower(name)
		LIKE $1::text`, [`%${query.toLowerCase().replace(/\s+/, '%')}%`]);
}
