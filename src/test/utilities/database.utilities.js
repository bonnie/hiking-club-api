import database from '../../server/model/database';

export function getTables() {
	return database.query(`
		SELECT table_name
		FROM information_schema.tables
		WHERE table_schema = 'public';`);
}

export function runDatabaseQuery(query, params) {
	return database.query(query, params);
}

export function truncateDatabase() {
	return getTables()
		.then((tables) => {
			return database.multi(tables.map((table) => {
				return `TRUNCATE ${table.table_name} RESTART IDENTITY CASCADE;`;
			}).join(''));
		})
		.catch((error) => {
			console.error(error);
		});
}
