/* eslint space-before-function-paren: ["error", "never"] */
/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */

import { expect } from 'chai';
import { describe, it, beforeEach } from 'mocha';
import { truncateDatabase } from '../utilities/database.utilities';

import {
	getAllTrails,
	getTrailById,
	createTrail,
	updateTrail,
	searchTrailsByName,
} from '../../server/model/trails';

describe('trails database model', function() {
	beforeEach('truncate database', function() {
		return truncateDatabase();
	});

	describe('getAllTrails function', function() {
		it('should be a function', function() {
			expect(getAllTrails).to.be.a('function');
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