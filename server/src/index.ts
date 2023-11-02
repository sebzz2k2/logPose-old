import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';
import cors from 'cors';
import loggerMiddleware from '../middleware/logger';
import { Server } from 'socket.io';
import http from 'http';
// import setupCron from './monitorServer';
import { verifySocket } from "../middleware/auth";

const logger = require('../../logger/logger')

dotenv.config({
  path: __dirname + "/.env"
});

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.use(loggerMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', routes);
app.use(cors())

io.use(verifySocket)

app.get('/api', (req: Request, res: Response) => {
  res.send('Hello World!');
});

const PORT = process.env.SERVER_PORT || 8080;

io.on('connection', (socket) => {
  logger.info('Connected to socket');
  const user = socket?.data?.user?.id;
  // const servers = setupCron(user);
  socket.on('disconnect', () => {
    logger.info('Disconnected from socket');
  });
});

server.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}.`);
});

// setupCron('ffe0ff3f-59e3-4a83-ba85-3526e701d76f')
