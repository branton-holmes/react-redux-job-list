import PropTypes from 'prop-types';
import React from 'react';

const Job = ({ data }) =>
    <li>
        <a href={data.url} target="_blank">{data.company_name}: {data.title} </a>
    </li>;

Job.propTypes = {
    data: PropTypes.object
};

export default Job;
