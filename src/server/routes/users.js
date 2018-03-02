import express from 'express';
import {
	getUserByEmail,
	updateUser,
	deleteUser,
} from '../model/users';
import {
	getAllReviewsByUserId,
} from '../model/reviews';
import {
	getAllJournalsByUserId,
	createJournal,
	getJournalById,
	updateJournal,
	deleteJournal,
} from '../model/journals';
import {
	getAllPinsByJournalId,
	createPin,
	getPinById,
	updatePin,
	deletePin,
} from '../model/pins';

const router = express.Router();

router.get('/:username', (request, response, next) => {
	const { username } = request.params;

	return getUserByEmail(username)
		.then((user) => {
			response.status(200).json(user);
		})
		.catch((error) => {
			next(error);
		});
});

router.put('/:username', (request, response, next) => {
	const { username } = request.params;
	const {
		id,
		name,
		password,
		profilePicture,
	} = request.body;

	return updateUser(id, name, username, password, profilePicture)
		.then((user) => {
			response.status(200).json(user);
		})
		.catch((error) => {
			next(error);
		});
});

router.delete('/:username', (request, response, next) => {
	const { username } = request.params;

	return getUserByEmail(username)
		.then((user) => {
			return deleteUser(user[0].id);
		})
		.then((deletedUser) => {
			response.status(200).json(deletedUser);
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/:username/reviews', (request, response, next) => {
	const { username } = request.params;

	return getUserByEmail(username)
		.then((user) => {
			return getAllReviewsByUserId(user[0].id);
		})
		.then((reviews) => {
			response.status(200).json(reviews);
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/:username/journals', (request, response, next) => {
	const { username } = request.params;

	return getUserByEmail(username)
		.then((user) => {
			return getAllJournalsByUserId(user[0].id);
		})
		.then((journals) => {
			response.status(200).json(journals);
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/:username/journals', (request, response, next) => {
	const { username } = request.params;
	const {
		trailId,
		title,
		entry,
	} = request.body;

	return getUserByEmail(username)
		.then((user) => {
			return createJournal(trailId, user[0].id, title, entry);
		})
		.then((journal) => {
			response.status(200).json(journal);
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/:username/journals/:id', (request, response, next) => {
	const { id } = request.params;

	return getJournalById(id)
		.then((journal) => {
			response.status(200).json(journal);
		})
		.catch((error) => {
			next(error);
		});
});

router.put('/:username/journals/:id', (request, response, next) => {
	const { id } = request.params;
	const {
		trailId,
		userId,
		title,
		entry,
	} = request.body;

	return updateJournal(id, trailId, userId, title, entry)
		.then((journal) => {
			response.status(200).json(journal);
		})
		.catch((error) => {
			next(error);
		});
});

router.delete('/:username/journals/:id', (request, response, next) => {
	const { id } = request.params;

	return deleteJournal(id)
		.then((journal) => {
			response.status(200).json(journal);
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/:username/journals/:id/pins', (request, response, next) => {
	const { id } = request.params;

	return getAllPinsByJournalId(id)
		.then((pins) => {
			response.status(200).json(pins);
		})
		.catch((error) => {
			next(error);
		});
});

router.post('/:username/journals/:id/pins', (request, response, next) => {
	const { id } = request.params;
	const {
		latitude,
		longitude,
		comment,
	} = request.body;

	return createPin(id, latitude, longitude, comment)
		.then((pin) => {
			response.status(200).json(pin);
		})
		.catch((error) => {
			next(error);
		});
});

router.get('/:username/journals/:journalId/pins/:pinId', (request, response, next) => {
	const {
		pinId,
	} = request.body;

	return getPinById(pinId)
		.then((pin) => {
			response.status(200).json(pin);
		})
		.catch((error) => {
			next(error);
		});
});

router.put('/:username/journals/:journalId/pins/:pinId', (request, response, next) => {
	const {
		journalId,
		pinId,
	} = request.params;
	const {
		latitude,
		longitude,
		comment,
	} = request.body;

	return updatePin(pinId, journalId, latitude, longitude, comment)
		.then((pin) => {
			response.status(200).json(pin);
		})
		.catch((error) => {
			next(error);
		});
});

router.delete('/:username/journals/:journalId/pins/:pinId', (request, response, next) => {
	const {
		pinId,
	} = request.params;

	return deletePin(pinId)
		.then((pin) => {
			response.status(200).json(pin);
		})
		.catch((error) => {
			next(error);
		});
});

export default router;
