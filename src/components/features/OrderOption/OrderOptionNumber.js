import React from 'react';
import styles from './OrderOption.scss';
import propTypes from 'prop-types';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionNumber = ({currentValue, limits, setOptionValue, price}) => (
  <div className={styles.number}>
    <input 
      type="number" 
      className={styles.inputSmall} 
      value={currentValue} 
      min={limits.min} 
      max={limits.max} 
      onChange={event => setOptionValue(event.currentTarget.value)}
    />
    ({formatPrice(price)})
  </div>
);

OrderOptionNumber.propTypes = {
  currentValue: propTypes.number,
  limits: propTypes.object,
  setOptionValue: propTypes.func,
  price: propTypes.string,
};

export default OrderOptionNumber;