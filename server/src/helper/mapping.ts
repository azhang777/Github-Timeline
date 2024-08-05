import { userInfo } from "os";
import { incomingRepos, incomingUser, Repo, User } from "../models/User";

export const mapUser = (incoming: incomingUser) => {
  const mappedUser: User = {
    username: incoming.data.login,
    id: incoming.data.id,
    url: incoming.data.url,
    bio: incoming.data.bio ?? "No bio found",
    publicRepoCount: incoming.data.public_repos,
    createdDate: dateConverter(incoming.data.created_at),
  };

  return mappedUser;
};

export const mapRepo = (incoming: incomingRepos) => {
  const formattedRepos: Repo[] = [];

  incoming.data.forEach((object) => {
    const formattedRepo: Repo = {
      name: object.name,
      ownerId: object.owner.id,
      htmlUrl: object.html_url,
      apiUrl: object.url,
      description: object.description ?? "No description found",
      createdAt: dateConverter(object.created_at),
    };

    formattedRepos.push(formattedRepo);
  });

  return formattedRepos;
};

const dateConverter = (dateStr?: string | null) => {
  if (!dateStr) {
    return "No date found";
  }
  const dateNum = Date.parse(dateStr);

  const date = new Date(dateNum);

  return date.toUTCString();
};
