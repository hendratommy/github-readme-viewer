import { useReducer } from "react";
import { reducer as searchResultReducer } from './searchResultReducer';
import { reducer as markDownViewerResuder } from './markDownViewerReducer';


const rootReducer = {
    searchResult: searchResultReducer,
    markDownViewer: markDownViewerResuder
};

const createRootReducer = (state, action) => {
    const currentState = [];
    for (const key in rootReducer) {
        currentState[key] = rootReducer[key](state[key], action);
        state = {
            ...state,
            ...currentState
        };
    }
    return currentState;
}

const initRootReducer = () => {
    return createRootReducer({}, { type: '@@INIT' })
}

export const useRootReducer = () => {
    const [state, dispatch] = useReducer(createRootReducer, initRootReducer());

    return [state, dispatch];
}
