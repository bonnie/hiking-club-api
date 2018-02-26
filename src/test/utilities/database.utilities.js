import database from '../model/database';

export function getTables() {
	return database.query(`
		SELECT table_name
		FROM information_schema_tables
		WHERE table_schema = 'public';`);
}

export function truncateDatabase() {
	return getTables()
		.then((tables) => {
			return database.multi(tables.map(`TRUNCATE ${table.table_name} RESTART IDENTITY CASCADE;`).join(''));
		})
		.catch((error) => {
			console.error(error);
		});
}
