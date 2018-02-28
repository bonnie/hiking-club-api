/* eslint space-before-function-paren: ["error", "never"] */
/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
/* eslint no-undef: 0 */

import { expect } from 'chai';
import { truncateDatabase } from '../utilities/database.utilities';

import {
	getAllTrails,
	getTrailById,
	createTrail,
	updateTrail,
	searchTrailsByName,
} from '../../server/model/trails';

describe('trails database model', function() {
	const name = 'Tuxachanie Trail';
	const latitude = '30.666780';
	const longitude = '-89.133125';
	const distance = 12.1;
	const duration = 4.03;
	const elevation = 179.1;
	const trailImage = '#';

	beforeEach('truncate database', function() {
		return truncateDatabase()
			.then(() => {
				return createTrail(name, latitude, longitude, distance, duration, elevation, trailImage);
			});
	});

	describe('getAllTrails function', function() {
		it('should be a function', function() {
			expect(getAllTrails).to.be.a('function');
		});

		context('when there is a single trail in the database', function() {
			let testTrail = {};

			before(() => {
				getAllTrails()
					.then((queryResult) => {
						[testTrail] = queryResult;
					});
			});

			it('should return a trail with an id', function() {
				expect(testTrail.id).to.equal(1);
			});

			it('should return a trail with a name', function() {
				expect(testTrail.name).to.equal(name);
			})
		});
	});

	describe('getTrailById function', function() {
		it('should be a function', function() {
			expect(getTrailById).to.be.a('function');
		});
	});

	describe('createTrail function', function() {
		it('should be a function', function() {
			expect(createTrail).to.be.a('function');
		});
	});

	describe('updateTrail function', function() {
		it('should be a function', function() {
			expect(updateTrail).to.be.a('function');
		});
	});

	describe('searchTrailsByName function', function() {
		it('should be a function', function() {
			expect(searchTrailsByName).to.be.a('function');
		});
	});
});