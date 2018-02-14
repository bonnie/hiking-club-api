INSERT INTO users (name, email, password)
VALUES ('LaToya', 'l@l.com', 'hikingisfun');

INSERT INTO users (name, email, password)
VALUES ('James', 'james@james.com', 'james');

INSERT INTO users (name, email, password)
VALUES ('Jenn', 'j@j.com', 'yayhiking');

INSERT INTO users (name, email, password)
VALUES ('Plankton', 'p@p.com', 'plankton');

INSERT INTO trails (name)
VALUES ('Lots of Trees');

INSERT INTO reviews (trail_id, user_id, rating, comment)
VALUES (1, 2, 5, 'So many trees!');

INSERT INTO reviews (trail_id, user_id, rating, comment)
VALUES (1, 1, 5, 'So peaceful!');

INSERT INTO reviews (trail_id, user_id, rating, comment)
VALUES (1, 4, 1, 'I hated it.');

INSERT INTO journals (trail_id, user_id, title, entry)
VALUES (1, 2, 'The trees are endless', 'I tried to count trees to fall asleep. There were too many to count. I did not fall asleep.');

INSERT INTO journals (trail_id, user_id, title, entry)
VALUES (1, 1, 'I was looking for trees, and I found them here.', 'This place is magical. Unless you do not like trees. Then it is scary.');

INSERT INTO journals (trail_id, user_id, title, entry)
VALUES (1, 4, 'Everything is terrible', 'People who hike here are stupid.');
