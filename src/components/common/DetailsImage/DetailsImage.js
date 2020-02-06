import React from 'react';
import propTypes from 'prop-types';
import styles from './DetailsImage.scss';

const DetailsImage = ({variant = '', children, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    {children}
  </div>
);

DetailsImage.propTypes = {
  variant: propTypes.string,
  children: propTypes.node,
};

export default DetailsImage;
