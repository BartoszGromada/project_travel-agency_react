import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';

const OrderOptionText = ({ currentValue, setOptionValue }) => (
  <div>
    <input
      type={'text'}
      className={styles.input}
      onChange={event => setOptionValue(event.currentTarget.value)}
      value={currentValue}
    />
  </div>
);

OrderOptionText.propTypes = {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

export default OrderOptionText;