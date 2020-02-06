import React from 'react';
import propTypes from 'prop-types';
import styles from './DetailsBox.scss';

const DetailsBox = ({variant = '', children, ...otherProps}) => (
  <article {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    {children}
  </article>
);

DetailsBox.propTypes = {
  variant: propTypes.string,
  children: propTypes.node,
};

export default DetailsBox;
