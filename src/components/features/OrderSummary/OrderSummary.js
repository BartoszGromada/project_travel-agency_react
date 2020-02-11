import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import {addDays} from '../../../utils/addDays';
//import {dateToStr} from '../../../utils/dateToStr';
import propTypes from 'prop-types';
import HTMLParser from 'react-html-parser';

const OrderSummary = ({tripCost, options, days}) => (
  <div>
    <h2 className={styles.component}>Total:<strong>{formatPrice(calculateTotal(tripCost, options))}</strong></h2>
    <div className={styles.input}>Trips START:<strong>{HTMLParser(options.startDate)}</strong></div>
    <div className={styles.input}>Trips STOP:<strong>{HTMLParser(addDays(options.startDate,days))}</strong></div>
  </div>
);

OrderSummary.propTypes = {
  tripCost: propTypes.string,
  options: propTypes.object,
  days: propTypes.number,
};

export default OrderSummary;