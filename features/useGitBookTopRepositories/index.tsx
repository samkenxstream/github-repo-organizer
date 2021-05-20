import { Repository } from "./Repository";

const { repositories } = require("./top-with-gh-sync-repos.json");

function load(): Repository[] {
  const repos: Repository[] = repositories.map(
    (repo) =>
      repo && {
        id: repo.id,
        name: repo.name,
        nameWithOwner: repo.nameWithOwner,
        description: repo.description,
        createdAt: repo.createdAt,
        topics:
          repo.repositoryTopics?.nodes.map((node) => node.topic.name) || [],
        stars: repo.stargazerCount,
        language: ((l) => l && l.name)(repo.primaryLanguage),
        isPrivate: repo.isPrivate,
        isArchived: repo.isArchived,
        url: repo.url,
        owner: repo.owner.login,
        isFork: repo.isFork,
        licenseNickname:
          repo.licenseInfo &&
          (repo.licenseInfo.nickname || repo.licenseInfo.name),
        vulnerabilityAlerts: [],
        collaborators:
          repo.collaborators &&
          repo.collaborators.nodes.map((collaborator) => collaborator.login),
        issueCount: repo.issues?.totalCount || 0,
        pullRequestCount: repo.pullRequests?.totalCount || 0,
        codeOfConduct: repo.codeOfConduct?.name || "None",
        ownerOrgRepoCount: repo.owner?.repositories?.nodes.length || 0,
        ownerOrgStarCount:
          repo.owner?.repositories?.nodes.reduce(
            (acc, el) => acc + el.stargazerCount,
            0
          ) || 0,
        defaultBranchName: repo.defaultBranchRef?.name,
        watcherCount: repo.watchers?.totalCount,
        diskUsage: repo.diskUsage,
        releaseCount: repo.releases?.totalCount,
        homepage: repo.homepageUrl,
      }
  );

  return repos;
}

export function useGitBookTopRepositories(): [Repository[], () => any] {
  const repositories = load();
  return [repositories, () => {}];
}
