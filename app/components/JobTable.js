import PropTypes from 'prop-types';
import React from 'react';
import Job from '../components/Job';

const JobTable = ({ filter, jobs }) => {
    let rows = [];

    jobs.forEach(j => {
        const titleLC = j.title.toLowerCase();
        const filterLC = filter.toLowerCase();

        if (titleLC.indexOf(filterLC) !== -1) {
            rows.push(
                <Job key={j.hashid} data={j}/>
            );
        }
    });

    return <ul> {rows} </ul>;
};

JobTable.propTypes = {
    filter: PropTypes.string,
    jobs: PropTypes.array
};

export default JobTable;
