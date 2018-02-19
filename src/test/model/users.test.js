import { expect } from 'chai';
import {
	getUserByEmail,
	getUserById,
	createUesr,
} from '../../server/model/users';

describe('users database model', function() {
	describe('getUserByEmail', function() {
		it('should be a function', function() {
			expect(getUserByEmail).to.be.a('function');
		});
	});

	describe('getUserById method', function() {
		it('should be a function', function() {
			expect(getUserById).to.be.a('function');
		});
	});

	describe('createUser', function() {
		it('should be a function', function() {
			expect(createUesr).to.be.a('function');
		});
	});
});
