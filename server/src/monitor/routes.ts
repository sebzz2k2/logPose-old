import { Router } from 'express';
import { getAllMonitors, getMonitorById, createMonitor, updateMonitor, deleteMonitor } from './controller';
const routes = Router();

routes.get('/', getAllMonitors);
routes.get('/:id', getMonitorById);
routes.post('/', createMonitor);
routes.put('/:id', updateMonitor);
routes.delete('/:id', deleteMonitor);

export default routes;
