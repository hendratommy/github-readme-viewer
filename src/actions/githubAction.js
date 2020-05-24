import axios from 'axios';
import { getReposUrl, getRepoReadMeUrl } from '../config';
import data from './repos.json';

export const GET_REPOS_REQUEST = 'GET_REPOS_REQUEST';
export const GET_REPOS_SUCCESS = 'GET_REPOS_SUCCESS';
export const GET_REPOS_FAILED = 'GET_REPOS_FAILED';

export const GET_README_REQUEST = 'GET_README_REQUEST';
export const GET_README_SUCCESS = 'GET_README_SUCCESS';
export const GET_README_FAILED = 'GET_README_FAILED';

export const fetchRepos = async (username, dispatch) => {
  dispatch({ type: GET_REPOS_REQUEST });
  try {
    // const response = await axios.get(getReposUrl(username));
    // dispatch({type: GET_REPOS_SUCCESS, payload: response.data})
    setTimeout(() => {
      dispatch({type: GET_REPOS_SUCCESS, payload: data})
    }, 1000);
  } catch(error) {
    console.error(error);
    dispatch({type: GET_REPOS_FAILED, error})
  }
}

export const fetchReadMe = async (repoUrl, dispatch) => {
  dispatch({ type: GET_README_REQUEST });
  try {
    const response = await axios.get(getRepoReadMeUrl(repoUrl));
    dispatch({type: GET_README_SUCCESS, payload: response.data})
  } catch(error) {
    console.error(error);
    dispatch({type: GET_README_FAILED, error})
  }
}

export const getReadMe = async (repoUrl) => {
  try {
    const response = await axios.get(getRepoReadMeUrl(repoUrl));
    return response.data;
  } catch(error) {
    console.error(error);
    throw error;
  }
}
