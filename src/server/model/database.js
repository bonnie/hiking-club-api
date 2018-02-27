import pgPromise from 'pg-promise';

const pgp = pgPromise({});

export default pgp(process.env.DATABASE_URL || 'postgres://localhost:5432/hiking_club');
