import {
  GET_README_REQUEST,
  GET_README_SUCCESS,
  GET_README_FAILED,
} from "../actions/githubAction";

export const initialState = {
  loading: false,
  error: null,
  readme: {},
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_README_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_README_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: null,
        readme: {
          content: action.payload.content,
          encoding: action.payload.encoding,
        },
      };
    }
    case GET_README_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.error,
        readme: {},
      };
    }
    default:
      return state;
  }
};
