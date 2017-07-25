import PropTypes from 'prop-types';
import React from 'react';
import Job from '../components/Job';

const JobTable = ({ filter, jobs, favorites, favoriteClicked }) => {
    let rows = [];

    jobs.forEach(j => {
        const titleLC = j.title.toLowerCase();
        const filterLC = filter.toLowerCase();
        const isFavorited = favorites.indexOf(j.hashid) !== -1;

        if (titleLC.indexOf(filterLC) !== -1) {
            rows.push(
                <Job key={j.hashid} data={j} isFavorited={isFavorited} favoriteClicked={favoriteClicked}/>
            );
        }
    });

    return <ul> {rows} </ul>;
};

JobTable.propTypes = {
    filter: PropTypes.string,
    jobs: PropTypes.array,
    favorites: PropTypes.array,
    favoriteClicked: PropTypes.func
};

export default JobTable;
