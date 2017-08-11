import PropTypes from 'prop-types';
import React from 'react';
import FontAwesome from 'react-fontawesome';

const FavoriteButton = ({ dataKey, onClick, favorite }) =>
    <FontAwesome id={dataKey} onClick={onClick} name={favorite ? 'star' : 'star-o'} />;

FavoriteButton.propTypes = {
    dataKey: PropTypes.string,
    favorite: PropTypes.bool,
    onClick: PropTypes.func
};

export default FavoriteButton;
