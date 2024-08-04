import { Request, Response } from "express";
import octokit from "../config/octokit.js";

export const getUserInfo = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const { data } = await octokit.users.getByUsername({ username });
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching user data" });
  }
};

export const getUserRepos = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const { data } = await octokit.repos.listForUser({ username });
    res.json(data);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching repositories" });
  }
};
