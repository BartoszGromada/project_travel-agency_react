import React from 'react';
import propTypes from 'prop-types';
import styles from './HappyHourAd.scss';

const HappyHourAd = ({title, promoDescription}) => (
  <div>
    <h3 className={styles.title}>{title}</h3>
    <h4 className={styles.promoDescription}>{promoDescription}</h4>
  </div>
);
  
HappyHourAd.propTypes = {
  title: propTypes.string.isRequired,
  promoDescription: propTypes.string.isRequired,
};
  
export default HappyHourAd;