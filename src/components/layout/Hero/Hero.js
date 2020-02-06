import React from 'react';
import styles from './Hero.scss';
import propTypes from 'prop-types';

const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image}  src={imageSrc} />
  </div>
);

Hero.propTypes = {
  variant: propTypes.string,
  titleText: propTypes.node.isRequired,
  imageSrc: propTypes.string.isRequired,
};

export default Hero;
