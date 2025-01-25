import cors from 'cors';
import express from 'express';
import { Express, Request, Response } from 'express';

import dotenv from 'dotenv';
import path from 'path';

import { films, genres } from './mock';

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

let corsOptions = {
	origin: ['http://localhost:8080'], //Разрешаю делать запросы только с данного url
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.static(path.resolve(__dirname, '../assets')));

app.get('/films', (req: Request, res: Response) => {
	res.json({ genres, films });
});

app.listen(port, () => {
	console.log(`Server is running at http://localhost:${port}`);
});
