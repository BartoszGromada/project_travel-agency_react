import React from 'react';
import propTypes from 'prop-types';
import {Row, Col} from 'react-flexbox-grid';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';

class OrderForm extends React.Component {
  render() {
    const {options, tripCost, setOrderOption} = this.props;
    return (
      <Row>
        {pricing.map(option => (
          <Col md={4} key={option.id} >
            <OrderOption {...option} currentValue={options[option.id]} setOrderOption={setOrderOption}/>
          </Col>
        ))}
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
      </Row>
    );
  }
}

OrderForm.propTypes = {
  options: propTypes.object,
  tripCost: propTypes.string,
  setOrderOption: propTypes.func,
};

export default OrderForm;