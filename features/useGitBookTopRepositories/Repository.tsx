export type Repository = {
  id: string;
  name: string;
  nameWithOwner: string;
  description: string | null;
  createdAt: Date;
  topics: string[];
  stars: number;
  language: string | null;
  isPrivate: boolean;
  isArchived: boolean;
  url: string;
  owner: string;
  isFork: boolean;
  licenseNickname: string | null;
  vulnerabilityAlerts: unknown[];
  collaborators: string[] | null;
  issueCount: number;
  pullRequestCount: number;
  codeOfConduct: string | null;
<<<<<<< HEAD:features/useRepositories/Repository.tsx
  defaultBranchName: string;
  watcherCount: number;
  diskUsage: number;
  releaseCount: number;
  homepage: string | null;
||||||| parent of 2ae4c99... display gitbook top repos:features/useRepositories/Repository.tsx
=======
  ownerOrgRepoCount: number;
  ownerOrgStarCount: number;
>>>>>>> 2ae4c99... display gitbook top repos:features/useGitBookTopRepositories/Repository.tsx
};
