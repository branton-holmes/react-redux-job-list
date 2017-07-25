import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const filter = (state = '', action) => {
    switch (action.type) {
        case types.FILTER:
            return action.filter;
        default:
            return state;
    }
};

const favorites = (state = [], action) => {
    switch (action.type) {
        case types.FAVORITE:
            const index = state.indexOf(action.key);
            if (index === -1) {
                state.push(action.key);
                return state;
            } state.splice(index, 1);
            return state;
        default:
            return state;
    }
};

const jobs = (state = {isFetching: false, items: []}, action) => {
    switch (action.type) {
        case types.REQUEST_JOBS:
            return Object.assign({}, state, {
                isFetching: true,
            });
        case types.RECEIVE_JOBS:
            return Object.assign({}, state, {
                isFetching: false,
                items: action.jobs
            });
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    filter,
    favorites,
    jobs,
    routing
});

export default rootReducer;
