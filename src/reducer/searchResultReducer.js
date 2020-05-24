import { GET_REPOS_FAILED, GET_REPOS_REQUEST, GET_REPOS_SUCCESS } from '../actions/githubAction';

export const initialState = {
  loading: false,
  error: null,
  repos: []
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_REPOS_REQUEST:
      return {
        ...state,
        loading: true
      };
    case GET_REPOS_SUCCESS: {
      let { repos, ...rest } = state;
      repos = action.payload.map(repo => (
        {
          id: repo.id,
          name: repo.name,
          fullName: repo.full_name,
          url: repo.url,
          htmlUrl: repo.html_url,
          description: repo.description,
          homepage: repo.homepage,
          license: repo.license?.name
        }
      ));
      return {
        ...rest,
        loading: false,
        error: null,
        repos
      };
    }
    case GET_REPOS_FAILED: {
      let { repos, ...rest } = state;
      return {
        ...rest,
        loading: false,
        error: action.error,
        repos: []
      };
    }
    default:
      return state;
  }
}