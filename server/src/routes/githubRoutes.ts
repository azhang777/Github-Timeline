import express from "express";
import { getUserInfo, getUserRepos } from "../controllers/githubController.js";

const router = express.Router();

router.get("/user/:username", getUserInfo);
router.get("/repos/:username", getUserRepos);

export default router;
