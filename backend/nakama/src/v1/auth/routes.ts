import { Router } from "express";
import { register, login, getUser } from "./controller";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/user", getUser);

export default router;
