import { Router } from "express";
import { getServerStatus } from "./controller"

const router = Router();

router.get("/", getServerStatus);

export default router;
