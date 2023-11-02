import { Router } from 'express';
import authRoutes from './auth/routes';
import monitorRoutes from './monitor/routes'
import statusRoutes from './status/routes'
const router = Router();

router.use('/auth', authRoutes)
router.use('/monitor', monitorRoutes)
router.use('/status', statusRoutes)

export default router;
