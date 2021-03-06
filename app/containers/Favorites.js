import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {filterTable, favorite} from '../actions';
import JobTable from '../components/JobTable';
import {jobList} from '../styles/jobList.scss';

const Favorites = ({filter, jobs, favorites, onFilter, onFavorite}) => {
    let input;

    const favoritedJobs = jobs.items.filter((job) => {
        return favorites.indexOf(job.hashid) !== -1;
    });
    return (
        <div className={jobList}>
            <h1>Favorites</h1>
            <input
                placeholder={'Filter by job title'}
                value={filter}
                ref={node => {
                    input = node;
                }}
                onChange={() => onFilter(input.value)}/>
            <JobTable filter={filter} jobs={favoritedJobs} favorites={favorites} favoriteClicked={onFavorite}/>
        </div>
    );
};

Favorites.propTypes = {
    filter: PropTypes.string,
    jobs: PropTypes.object,
    favorites: PropTypes.array,
    onFilter: PropTypes.func,
    onFavorite: PropTypes.func
};

const mapStateToProps = (state) => {
    return {
        jobs: state.jobs,
        favorites: state.favorites,
        filter: state.filter
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onFilter: filterText => dispatch(filterTable(filterText)),
        onFavorite: event => dispatch(favorite(event))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Favorites);
