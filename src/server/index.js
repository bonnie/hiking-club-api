import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

import routes from './routes';

const app = express();
const port = 3000;
const corsOptions = {
	origin: '',
	optionsSuccessStatus: 200,
};

app.use(bodyParser.json());
app.use(cors(corsOptions));
app.options('*', cors());

app.use('/', routes);

app.listen(port, () => {
	console.log(`hiking club api now running on port ${port}`);
});
