export const getReposUrl =  (username) => `https://api.github.com/users/${username}/repos`;
export const getRepoReadMeUrl = (repoUrl) => `${repoUrl}/readme`;