import PropTypes from 'prop-types';
import React from 'react';
import FavoriteButton from './FavoriteButton';
import {favorite} from '../styles/jobList.scss';

const Job = ({ data, isFavorited, favoriteClicked }) => {
    const buttonText = isFavorited ? 'Unfavorite' : 'Favorite';
    const cssClass = isFavorited ? favorite : '';
    return (
        <li className={cssClass}>
            <a href={data.url} target="_blank">{data.company_name}: {data.title} </a>
            <FavoriteButton dataKey={data.hashid} onClick={favoriteClicked} text={buttonText}/>
        </li>);
};

Job.propTypes = {
    data: PropTypes.object,
    isFavorited: PropTypes.bool,
    favoriteClicked: PropTypes.func
};

export default Job;
