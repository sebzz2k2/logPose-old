import express, { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import routes from './routes';
import cors from 'cors';
import loggerMiddleware from '../middleware/logger';
import { Server } from 'socket.io';
import http from 'http';
import setupCron from './monitorServer';
import { verifySocket } from "../middleware/auth";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

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
  const userId = socket?.data?.user?.id;
  setupCron(userId);
  setInterval(async () => {
    const userMonitorStatus = await prisma.monitorStatus.findMany({
      where: {
        monitor: {
          owner: {
            id: userId
          }
        }
      }
    })
    socket.emit("servers", JSON.stringify(userMonitorStatus))
  }, 60000);
  socket.on('disconnect', () => {
    logger.info('Disconnected from socket');
  });
});

server.listen(PORT, () => {
  logger.info(`Server is running on port ${PORT}.`);
});

