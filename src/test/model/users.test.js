import { expect } from 'chai';
import {
	getUserByEmail,
	getUserById,
	deleteUser,
	updateUser,
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

	describe('deleteUser method', function() {
		it('should be a function', function() {
			expect(deleteUser).to.be.a('function');
		});
	});

	describe('updateUser method', function() {
		it('should be a function', function() {
			expect(updateUser).to.be.a('function');
		});
	});
});
