import {Router} from 'express';
import authRoutes from './auth/routes';
import monitorRoutes from './monitor/routes'
const router = Router();

router.use('/auth',authRoutes)
router.use('/monitor',monitorRoutes)

export default router;
