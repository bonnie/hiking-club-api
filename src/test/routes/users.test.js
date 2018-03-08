/* eslint space-before-function-paren: ["error", "never"] */
/* eslint prefer-arrow-callback: 0 */
/* eslint func-names: ["error", "never"] */
/* eslint no-undef: 0 */

import chai, { expect } from 'chai';
import chaiHttp from 'chai-http';
import {
	truncateDatabase,
	runDatabaseQuery,
} from '../utilities/database.utilities';

const server = 'http://localhost:8080';

chai.use(chaiHttp);
