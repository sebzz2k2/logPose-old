import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';
import cors from 'cors';
const logger = require('../../logger/logger')
dotenv.config({
  path: __dirname + "/.env"
});

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const PORT = process.env.SERVER_PORT || 8080;

app.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}.`);
});

