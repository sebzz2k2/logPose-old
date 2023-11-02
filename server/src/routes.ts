import { Router } from 'express';
import authRoutes from './auth/routes';
import monitorRoutes from './monitor/routes'
import statusRoutes from './status/routes'
import { verifyExpress } from '../middleware/auth';
const router = Router();

router.use('/auth', authRoutes)
router.use('/monitor', verifyExpress, monitorRoutes)
router.use('/status', verifyExpress, statusRoutes)

export default router;
