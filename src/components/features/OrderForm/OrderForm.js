import React from 'react';
import propTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import Button from '../../common/Button/Button';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';
import settings from '../../../data/settings';

const valid = (options, name, id, tripCost) => {
  const { contactName, contactInfo } = options;
  if ( contactName == '' && contactInfo == '') {
    window.alert('Complete the name and contact fields'); 
  } else if ( contactName == '') {
    window.alert('Complete the "Your name" field'); 
  } else if ( contactInfo == '') {
    window.alert('Complete the "contact Info" field'); 
  } else { 
    sendOrder(options, tripCost, name, id);
  }
};

const sendOrder = (options, tripCost, name, id) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));

  const payload = {
    nameTrip: name,
    idTrip: id,
    costTrip: totalCost,
    ...options,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

class OrderForm extends React.Component {
  render() {
    const {options, tripCost, days, setOrderOption, name, id} = this.props;  
    return (
      <Row>
        {pricing.map(option => (
          <Col md={4} key={option.id} >
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options} days={days}/>
        </Col>
        <Col xs={12}>
          <Button variant='order' onClick={() => valid(options, name, id, tripCost)}>Order now!</Button>
        </Col>
      </Row>
    );
  }
}

OrderForm.propTypes = {
  options: propTypes.object,
  tripCost: propTypes.string,
  setOrderOption: propTypes.func,
  days: propTypes.number,
  name: propTypes.string,
  id: propTypes.string,
};

export default OrderForm;