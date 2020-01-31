import React from 'react';
import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';
import PropTypes from 'prop-types';

const OrderSummary = ({cost, options}) => (
  <h2 className={styles.component}>Total:<strong>{calculateTotal(formatPrice(cost),options)}</strong></h2>
);

OrderSummary.propTypes = {
  cost: PropTypes.number,
  options: PropTypes.object,
};

export default OrderSummary;