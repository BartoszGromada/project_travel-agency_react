import React from 'react';
import PropTypes from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, setOptionValue, required, currentValue}) => (
  <div 
    className={styles.icon}
  >
    {required ? '' : (
      <div
        onClick={() => setOptionValue('')}
      >
        <Icon name='times-circle'/> none
      </div>
    )}
    {values.map(value => (
      <div 
        className={styles.icon + (currentValue === value.id ? ' ' + styles.iconActive : '')}
        key={value.id} 
        onClick={()=> setOptionValue(value.id)}
      >
        <Icon name={value.icon}/>{value.name} ({formatPrice(value.price)})
      </div>
    ))}
  </div>
);

OrderOptionIcons.propTypes = {
  values: PropTypes.array,
  required: PropTypes.node,
  currentValue: PropTypes.string,
  setOptionValue: PropTypes.func,
};

export default OrderOptionIcons;