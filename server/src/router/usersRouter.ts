import express from "express";
import { getUserInfo, getUserRepos } from "../controllers/usersController.js";

const router = express.Router();

router.get("/user/:username", getUserInfo);
router.get("/repos/:username", getUserRepos);

export default router;
