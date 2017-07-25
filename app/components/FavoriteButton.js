import PropTypes from 'prop-types';
import React from 'react';

const FavoriteButton = ({ dataKey, onClick, text }) =>
    <button id={dataKey} onClick={onClick}>{text}</button>;

FavoriteButton.propTypes = {
    dataKey: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
};

export default FavoriteButton;
