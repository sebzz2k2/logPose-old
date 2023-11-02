import { Router } from "express";
import { getServerStatus } from "./controller";
import verifyToken from "../../middleware/auth";

const router = Router();

router.get("/", verifyToken, getServerStatus);

export default router;
