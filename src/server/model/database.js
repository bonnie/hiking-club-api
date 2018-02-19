import pgp from 'pg-promise';

pgp();
const connectionString = process.env.DATABASE_URL;
const database = pgp(connectionString);

export default database;
