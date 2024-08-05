import { Request, Response } from "express";
import octokit from "../config/octokit.js";
import { mapRepo, mapUser } from "../helper/mapping.js";

//https://octokit.github.io/rest.js/v20#users
export const getUserInfo = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const data = await octokit.users.getByUsername({ username });
    const formatUserData = mapUser(data);
    res.json(formatUserData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching user data" });
  }
};

export const getUserRepos = async (req: Request, res: Response) => {
  try {
    const { username } = req.params;
    const data = await octokit.repos.listForUser({ username });
    const formatRepoData = mapRepo(data);
    res.json(formatRepoData);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching repositories" });
  }
};
