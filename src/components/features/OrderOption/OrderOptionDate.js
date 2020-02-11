import React from 'react';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

class OrderOptionDate extends React.Component {

  render() {
    const { currentValue, setOptionValue} = this.props;

    return (
      <DatePicker
        className={styles.input}
        selected={currentValue}
        onChange={setOptionValue}
      />
    );
  }
}

OrderOptionDate.propTypes = {
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;