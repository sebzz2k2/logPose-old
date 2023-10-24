import { Router } from 'express';
import { getAllMonitors, getMonitorById, createMonitor, updateMonitor, deleteMonitor } from './controller';
import verifyToken from '../../middleware/auth';
const routes = Router();

routes.get('/', verifyToken, getAllMonitors);
routes.get('/:id', verifyToken, getMonitorById);
routes.post('/', verifyToken, createMonitor);
routes.put('/:id', verifyToken, updateMonitor);
routes.delete('/:id', verifyToken, deleteMonitor);

export default routes;
