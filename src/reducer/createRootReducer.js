import searchFormReducer from './searchFormReducer'

export default function createRootReducer() {
    return {
        searchForm: searchFormReducer
    };
}