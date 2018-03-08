/* eslint space-before-function-paren: ["error", "never"] */
/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
/* eslint no-undef: 0 */

import { expect } from 'chai';
import {
	truncateDatabase,
	runDatabaseQuery,
} from '../utilities/database.utilities';

import {
	createTrail,
	getAllTrails,
	getTrailById,
	updateTrail,
	searchTrailsByName,
} from '../../server/model/trails';

describe('trails database model', function() {
	const name = 'Tuxachanie Trail';
	const latitude = 30.666780;
	const longitude = -89.133125;
	const distance = 12.1;
	const duration = 4.03;
	const elevation = 179.1;
	const trailImage = '#';
	const standardTrail = {
		id: 1,
		name: name,
		latitude: latitude,
		longitude: longitude,
		distance: distance,
		duration: duration,
		elevation: elevation,
		trail_image: trailImage,
	};

	describe('getAllTrails function', function() {
		it('should be a function', function() {
			expect(getAllTrails).to.be.a('function');
		});

		context('when there is a single trail in the database', function() {
			let testTrail = {};

			before(function() {
				return truncateDatabase()
					.then(function() {
						return runDatabaseQuery(`
								INSERT INTO trails(name, latitude, longitude, distance, duration, elevation, trail_image)
								VALUES ($1, $2, $3, $4, $5, $6, $7);
							`, [name, latitude, longitude, distance, duration, elevation, trailImage]);
					})
					.then(function() {
						return getAllTrails();
					})
					.then(function(queryResult) {
						[testTrail] = queryResult;
					})
					.catch(function(error) {
						console.log(error);
					});
			});

			it('should return a trail with an id', function() {
				expect(testTrail.id).to.equal(1);
			});

			it('should return a trail with a name', function() {
				expect(testTrail.name).to.equal(name);
			});

			it('should return a trail with a latitude', function() {
				expect(testTrail.latitude).to.equal(latitude);
			});

			it('should return a trail with a longitude', function() {
				expect(testTrail.longitude).to.equal(longitude);
			});

			it('should return a trail with a distance', function() {
				expect(testTrail.distance).to.equal(distance);
			});

			it('should return a trail with a duration', function() {
				expect(testTrail.duration).to.equal(duration);
			});

			it('should return a trail with an elevation', function() {
				expect(testTrail.elevation).to.equal(elevation);
			});

			it('should return a trail with a trail image', function() {
				expect(testTrail.trail_image).to.equal(trailImage);
			});
		});

		context('when there are multiple trails in the database', function() {
			let testTrails = {};

			before(function() {
				return truncateDatabase()
					.then(function() {
						return runDatabaseQuery(`
								INSERT INTO trails(name, latitude, longitude, distance, duration, elevation, trail_image)
								VALUES
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7);
							`, [name, latitude, longitude, distance, duration, elevation, trailImage]);
					})
					.then(function() {
						return getAllTrails();
					})
					.then(function(queryResult) {
						testTrails = queryResult;
					})
					.catch(function(error) {
						console.log(error);
					});
			});

			it('should return more than one trail', function() {
				expect(testTrails.length).to.equal(7);
			});
		});

		context('when the database is empty', function() {
			let testTrail = {};

			before(function() {
				return truncateDatabase()
					.then(function() {
						return getAllTrails();
					})
					.then(function(queryResult) {
						testTrail = queryResult;
					})
					.catch(function(error) {
						console.log(error);
					});
			});

			it('should return an empty object', function() {
				expect(testTrail).to.deep.equal([]);
			});
		});
	});

	describe('getTrailById function', function() {
		it('should be a function', function() {
			expect(getTrailById).to.be.a('function');
		});

		context('when the database is empty', function() {
			let testTrail = {};

			before(function() {
				return truncateDatabase()
					.then(function() {
						return getTrailById(1);
					})
					.then(function(queryResult) {
						testTrail = queryResult;
					})
					.catch(function(error) {
						// No data error is expected functionality here so we don't care about it
						if (error.message !== 'No data returned from the query.') {
							console.log(error);
						}
					});
			});

			it('should not return a trail', function() {
				expect(testTrail).to.deep.equal({});
			});
		});

		context('when the database has trails', function() {
			let testTrail = {};

			before(function() {
				return truncateDatabase()
					.then(function() {
						return runDatabaseQuery(`
								INSERT INTO trails(name, latitude, longitude, distance, duration, elevation, trail_image)
								VALUES
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7);
							`, [name, latitude, longitude, distance, duration, elevation, trailImage]);
					})
					.then(function() {
						return getTrailById(1);
					})
					.then(function(queryResult) {
						testTrail = queryResult;
					});
			});

			it('should return a valid trail', function() {
				expect(testTrail).to.deep.equal(standardTrail);
			});
		});
	});

	describe('createTrail function', function() {
		let testTrail = {};

		before(function() {
			return truncateDatabase()
				.then(function() {
					return createTrail(name, latitude, longitude, distance, duration, elevation, trailImage);
				})
				.then(function(queryResult) {
					testTrail = queryResult;
				})
				.catch(function(error) {
					console.log(error);
				});
		});

		it('should be a function', function() {
			expect(createTrail).to.be.a('function');
		});

		it('should add a row to the database', function() {
			expect(testTrail).to.deep.equal(standardTrail);
		});
	});

	describe('updateTrail function', function() {
		it('should be a function', function() {
			expect(updateTrail).to.be.a('function');
		});

		context('when the trail is not already in the database', function() {
			let testTrail = {};

			before(function() {
				return truncateDatabase()
					.then(function() {
						return runDatabaseQuery(`
								INSERT INTO trails(name, latitude, longitude, distance, duration, elevation, trail_image)
								VALUES
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7);
							`, [name, latitude, longitude, distance, duration, elevation, trailImage]);
					})
					.then(function() {
						return updateTrail(5, 'Black Creek Trail', 30.988056, -89.052993, 42.2, 14.07, 115.9, '/');
					})
					.then(function(queryResult) {
						testTrail = queryResult;
					})
					.catch(function(error) {
						console.log(error);
					});
			});

			it('should return a trail with the right id', function() {
				expect(testTrail.id).to.equal(5);
			});

			it('should return a trail with a name', function() {
				expect(testTrail.name).to.equal('Black Creek Trail');
			});

			it('should return a trail with a latitude', function() {
				expect(testTrail.latitude).to.equal(30.988056);
			});

			it('should return a trail with a longitude', function() {
				expect(testTrail.longitude).to.equal(-89.052993);
			});

			it('should return a trail with a distance', function() {
				expect(testTrail.distance).to.equal(42.2);
			});

			it('should return a trail with a duration', function() {
				expect(testTrail.duration).to.equal(14.07);
			});

			it('should return a trail with an elevation', function() {
				expect(testTrail.elevation).to.equal(115.9);
			});

			it('should return a trail with a trail image', function() {
				expect(testTrail.trail_image).to.equal('/');
			});
		});
	});

	describe('searchTrailsByName function', function() {
		it('should be a function', function() {
			expect(searchTrailsByName).to.be.a('function');
		});

		context('when the database is empty', function() {
			let testTrail = {};

			before(function() {
				return truncateDatabase()
					.then(function() {
						return searchTrailsByName('Tuxachanie Trail');
					})
					.then(function(queryResult) {
						testTrail = queryResult;
					})
					.catch(function(error) {
						console.log(error);
					});
			});

			it('should return no results', function() {
				expect(testTrail).to.deep.equal([]);
			});
		});

		context('when there are multiple trails in the database', function() {
			before(function() {
				return truncateDatabase()
					.then(function() {
						return runDatabaseQuery(`
								INSERT INTO trails(name, latitude, longitude, distance, duration, elevation, trail_image)
								VALUES
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7),
								($1, $2, $3, $4, $5, $6, $7);
							`, [name, latitude, longitude, distance, duration, elevation, trailImage]);
					});
			});

			it('should return a trail if it is there', function() {
				expect();
			});
		});
	});
});
