/* eslint space-before-function-paren: ["error", "never"] */
/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
/* eslint no-undef: 0 */

import { expect } from 'chai';
import { truncateDatabase } from '../utilities/database.utilities';

import {
	createReview,
	getAllReviewsByTrailId,
	getAllReviewsByUserId,
	getReviewById,
	updateReview,
	deleteReview,
} from '../../server/model/reviews';
