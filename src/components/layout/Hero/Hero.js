import React from 'react';
import styles from './Hero.scss';
import propTypes from 'prop-types';
import HappyHourAd from '../../features/HappyHourAd/HappyHourAd';

const Hero = ({variant = '', titleText, imageSrc, ...otherProps}) => (
  <div {...otherProps} className={styles.component + variant.split(' ').map(name => ' ' + (styles[name] || name)).join('')}>
    <h2 className={styles.title}>{titleText}</h2>
    <img className={styles.image}  src={imageSrc} />
    <HappyHourAd title={`Happy Hour`} promoDescription={`It's your time! Take advantage of Happy Hour! All offers 20% off!`}/>
  </div>
  
);

Hero.propTypes = {
  variant: propTypes.string,
  titleText: propTypes.node.isRequired,
  imageSrc: propTypes.string.isRequired,
};

export default Hero;
