import { RestEndpointMethodTypes } from "@octokit/rest";

export type incomingUser =
  RestEndpointMethodTypes["users"]["getByUsername"]["response"];

export type incomingRepos =
  RestEndpointMethodTypes["repos"]["listForUser"]["response"];
export type User = {
  username: string;
  id: number;
  url: string;
  bio: string;
  publicRepoCount: number;
  createdDate: string;
};

export type Repo = {
  name: string;
  ownerId: number;
  htmlUrl: string;
  apiUrl: string;
  description: string;
  createdAt: string;
};
