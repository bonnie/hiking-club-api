import { expect } from 'chai';
import {
	getAllTrails,
	getTrailById,
	createTrail,
	updateTrail,
	searchTrailsByName,
} from '../../server/model/trails';

describe('trails database model', function() {
	describe('getAllTrails function', function() {
		it('should be a function', function() {
			expect(getAllTrails).to.be.a('function');
		});
	});
});