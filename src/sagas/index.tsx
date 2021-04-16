import { put, takeEvery, all, select, call } from "redux-saga/effects";
import { Octokit } from "@octokit/rest";
import { graphql } from "@octokit/graphql";
import query from "../api/gitHubGraphQlQuery";
import { Convert, Data } from "../types/gitHubGraphQlQueryResponseType";
import {
  deleteRepositories,
  setRepositories,
} from "../features/RepositoryTable/repositoriesSlice";
import { RootState } from "..";
import { setAccessToken, setUser } from "../features/UserLogin/userLoginSlice";
import { Repository } from "../features/RepositoryTable";

let octokit = new Octokit();

const authURL = "https://github-auth-backend-hugh.glitch.me/start_auth";

export function* init() {
  // get from local storage or get from url
  const query = new URLSearchParams(window.location.search);

  if (query.get("access_token")) {
    yield put(setAccessToken({ access_token: query.get("access_token") }));
    yield startLoadUser();
  }
}

export function* watchInit() {
  yield takeEvery("INIT", init);
}

export function* startLogIn() {
  const query = {
    redirect_uri: window.location.origin + window.location.pathname,
    scope: "repo",
  };

  const authProxyUrl = `${authURL}?${new URLSearchParams(query)}`;

  yield window.location.assign(authProxyUrl);
}

export function* watchStartLogIn() {
  yield takeEvery("START_LOG_IN", startLogIn);
}

export function* startLoadRepos(endCursor?: string): any {
  const accessToken = yield select(
    (state: RootState) => state.userLoginReducer.accessToken
  );
  const user = yield select(
    (state: RootState) => state.userLoginReducer.user?.login
  );

  let data: Data;

  try {
    const result = yield call(() =>
      graphql<Data>({
        query: query(endCursor ?? ""),
        headers: {
          authorization: `token ${accessToken}`,
          accept: "application/vnd.github.vixen-preview+json",
        },
      })
    );
    data = Convert.toGitHubRepoQueryResponseType(`{ data: ${result} }`).data;
  } catch (error) {
    console.log(error);
    data = error.data;
  }

  const repos: Repository[] = data.viewer.repositories.nodes.map((repo) => ({
    id: repo.id,
    name: repo.name,
    nameWithOwner: repo.nameWithOwner,
    description: repo.description,
    createdAt: repo.createdAt,
    topics: repo.repositoryTopics.nodes.map((node) => node.topic.name),
    stars: repo.stargazers.totalCount,
    language: ((l) => l && l.name)(repo.primaryLanguage),
    isPrivate: repo.isPrivate,
    isArchived: repo.isArchived,
    url: repo.url,
    owner: repo.owner.login,
    isFork: repo.isFork,
    licenseNickname:
      repo.licenseInfo && (repo.licenseInfo.nickname || repo.licenseInfo.name),
    vulnerabilityAlerts: repo.vulnerabilityAlerts.nodes,
    collaborators:
      repo.collaborators &&
      repo.collaborators.nodes
        .filter((a) => a.login !== user)
        .map((collaborator) => collaborator.login),
    issueCount: repo.issues.totalCount,
    pullRequestCount: repo.pullRequests.totalCount,
  }));

  yield put(setRepositories({ repositories: repos }));

  const repoCount = yield select(
    (state: RootState) => state.repositoriesReducer.repositories?.length
  );
  if (repoCount < data.viewer.repositories.totalCount) {
    yield startLoadRepos(data.viewer.repositories.pageInfo.endCursor);
  }
}

export function* watchLoadRepositories() {
  yield takeEvery("START_LOAD_REPOSITORIES", startLoadRepos);
}

function* refresh() {
  yield put(deleteRepositories());
  yield startLoadRepos();
}

export function* watchRefresh() {
  yield takeEvery("REFRESH_REPOSITORIES", refresh);
}

export function* startLoadUser(): any {
  const accessToken = yield select(
    (state: RootState) => state.userLoginReducer.accessToken
  );

  octokit = new Octokit({
    auth: `token ${accessToken}`,
  });

  const { data } = yield call(() => octokit.users.getAuthenticated());

  yield put(setUser({ user: data }));

  yield startLoadRepos();
}

export function* watchLoadUser() {
  yield takeEvery("START_LOAD_USER", startLoadUser);
}
export default function* rootSaga() {
  yield all([
    watchInit(),
    watchStartLogIn(),
    watchLoadRepositories(),
    watchLoadUser(),
    watchRefresh(),
  ]);
}