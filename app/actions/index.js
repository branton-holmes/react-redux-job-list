import * as types from './types';
import fetch from 'isomorphic-fetch';

export function filterTable(filter) {
    return {
        type: types.FILTER,
        filter
    };
}

export function requestJobs() {
    return {
        type: types.REQUEST_JOBS
    };
}

export function receiveJobs(json) {
    return {
        type: types.RECEIVE_JOBS,
        jobs: json.jobs,
        receivedAt: Date.now()
    };
}

export function fetchJobs() {
    return dispatch => {
        dispatch(requestJobs());
        return fetch('https://codepen.io/jobs.json')
            .then(
                response => response.json(),
                error => console.log('an error occured while fetching data from codepen.io', error)
            )
            .then(json =>
                dispatch(receiveJobs(json))
            );
    };
}

function shouldFetchJobs(state) {
    const jobs = state.jobs;
    if (!jobs) {
        return true;
    } else if (!jobs.items.length) {
        return true;
    } else if (jobs.isFetching) {
        return false;
    }
    return false;
}

export function fetchJobsIfNeeded() {
    return (dispatch, getState) => {
        if (shouldFetchJobs(getState())) {
            return dispatch(fetchJobs());
        }
        return null;
    };
}
