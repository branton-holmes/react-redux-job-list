import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {filterTable} from '../actions';
import JobTable from '../components/JobTable';
import {jobList} from '../styles/jobList.scss';

const AllJobs = ({filter, jobs, onFilter}) => {
    let input;

    return (
        <div className={jobList}>
            <h1>Job list</h1>
            <input
                placeholder={'Filter by job title'}
                value={filter}
                ref={node => {
                    input = node;
                }}
                onChange={() => onFilter(input.value)}/>
            <JobTable filter={filter} jobs={jobs}/>
        </div>
    );
};

AllJobs.propTypes = {
    filter: PropTypes.string,
    jobs: PropTypes.array,
    favorites: PropTypes.array,
    onFilter: PropTypes.func
};

/*  This successfully adds the jobs to the application state, but only after the component has rendered.
This is my first time working with redux instead of flux, so I'm still wrapping my head around how the application store works.
In flux, I would use componentWillMount to dispatch an action and add it to the store. Still figuring out the best way to handle this in redux. */
const mapStateToProps = (state) => {
    axios.get('https://codepen.io/jobs.json').then((result) => {
        state.jobs = result.data.jobs;
    });
    return {
        jobs: state.jobs,
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllJobs);
