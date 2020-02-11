import React from 'react';
import styles from './OrderOption.scss';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';
import {addDays} from '../../../utils/addDays';

class OrderOptionDate extends React.Component {

  render() {
    const { currentValue, setOptionValue} = this.props;

    return (
      <div>
        <DatePicker
          className={styles.input}
          selected={currentValue}
          onChange={setOptionValue}
          dateFormat="dd/MM/yyyy"
          minDate={addDays(new Date(), 14)}
        />
        {`(Select a date min. 14 days from today)`}
      </div>
    );
  }
}

OrderOptionDate.propTypes = {
  currentValue: PropTypes.date,
  setOptionValue: PropTypes.func,
};

export default OrderOptionDate;