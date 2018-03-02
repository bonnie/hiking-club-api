import database from './database';

export function createUser(name, email, password, profilePicture) {
	return database.one(`
	`, [name, email, password, profilePicture]);
}

export function getUserByEmail(email) {
	return database.any(`
		SELECT *
		FROM users
		WHERE email = $1;`, [email]);
}

export function getUserById(id) {
	return database.one(`
		SELECT *
		FROM users
		WHERE id = $1;`, [id]);
}

export function deleteUser(id) {
	return database.one(`
		DELETE FROM users
		WHERE id = $1
		RETURNING *;`, [id]);
}

export function updateUser(id, name, email, password, profilePicture) {
	return database.one(`
		UPDATE users
		SET 
			name = $2,
			email = $3,
			password = $4,
			profile_picture = $5
		WHERE id = $1
		RETURNING *;`, [id, name, email, password, profilePicture]);
}
