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
    jobs,
    routing
});

export default rootReducer;
