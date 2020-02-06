import React from 'react';
import styles from './Section.scss';
import propTypes from 'prop-types';

const Section = ({variant = '', children, ...otherProps}) => (
  <section {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    {children}
  </section>
);

Section.propTypes = {
  variant: propTypes.string,
  children: propTypes.node,
};

export default Section;
