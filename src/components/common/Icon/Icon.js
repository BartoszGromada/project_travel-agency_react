import React from 'react';
import propTypes from 'prop-types';

const Icon = props => (<i className={`fas fa-${props.name}`}></i>);

Icon.propTypes = {
  name: propTypes.string.isRequired,
};

export default Icon;
