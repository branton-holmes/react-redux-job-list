import PropTypes from 'prop-types';
import React from 'react';
import {connect} from 'react-redux';
import {filterTable, favorite} from '../actions';
import {fetchJobsIfNeeded} from '../actions/index';
import JobTable from '../components/JobTable';
import {jobList} from '../styles/jobList.scss';

class AllJobs extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { loadJobs } = this.props;
        loadJobs();
    }

    render() {
        const {filter, jobs, favorites, onFilter, onFavorite} = this.props;
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
                <JobTable filter={filter} jobs={jobs.items} favorites={favorites} favoriteClicked={onFavorite}/>
            </div>
        );
    }
}

AllJobs.propTypes = {
    filter: PropTypes.string,
    jobs: PropTypes.object,
    favorites: PropTypes.array,
    onFilter: PropTypes.func,
    onFavorite: PropTypes.func,
    loadJobs: PropTypes.func
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
        onFavorite: event => dispatch(favorite(event)),
        loadJobs: () => dispatch(fetchJobsIfNeeded())
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AllJobs);
