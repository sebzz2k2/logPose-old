import { Router } from "express";
import monitorRoutes from "src/v1/routes";
const router = Router();

router.use("/monitor", monitorRoutes);

export default router;
