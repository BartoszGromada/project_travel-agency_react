import React from 'react';
import propTypes from 'prop-types';
import styles from './PageTitle.scss';

const PageTitle = props => (
  <h2 className={styles.title}>{props.text}</h2>
);

PageTitle.propTypes = {
  text: propTypes.string.isRequired,
};

export default PageTitle;
