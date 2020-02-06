import React from 'react';
import propTypes from 'prop-types';
import styles from './SideImage.scss';

const SideImage = props => (<img  className={styles.component} src={`${props.source}`} />);

SideImage.propTypes = {
  source: propTypes.string.isRequired,
};

export default SideImage;
