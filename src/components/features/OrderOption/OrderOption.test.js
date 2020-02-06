import React from 'react';
import {shallow} from 'enzyme';
import OrderOption from './OrderOption';

describe('Component OrderOption', () => {
  it('should render without crashing', () => {
    const expectedName = 'Name';
    const expectedType = {type: 'date'};
    const component = shallow(<OrderOption type={expectedType} name={expectedName}/>);
    expect(component).toBeTruthy();
  });
  it('should return empty object if called without required props', () => {
    const component = shallow(<OrderOption />);
    expect(component).toEqual({});
  });
  it ('should render name without crashing', () => {
    const expectedName = 'Name';
    const expectedType = 'text';
    const component = shallow(<OrderOption type={expectedType} name={expectedName}/>);
    expect(component.find('.component').text()).toEqual(expectedName);
    console.log(component.debug());
  });
});