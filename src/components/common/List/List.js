import React from 'react';
import propTypes from 'prop-types';
import styles from './List.scss';

const List = ({variant = '', children, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    {children}
  </div>
);

List.propTypes = {
  variant: propTypes.string,
  children: propTypes.node,
};

export default List;
