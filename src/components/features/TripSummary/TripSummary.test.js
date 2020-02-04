import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should render URL without crashing', () => {
    const expectedURL = 'abc';
    const component = shallow(<TripSummary id={expectedURL} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(`/trip/${expectedURL}`);
  });
  it('should render image (name, alt) without crashing', () => {
    const expectedSRC = 'image';
    const expectedALT = 'image title';
    const component = shallow(<TripSummary image={expectedSRC} name={expectedALT} tags={[]}/>);
    expect(component.find('img').prop('src')).toEqual(expectedSRC);
    expect(component.find('img').prop('alt')).toEqual(expectedALT);
  });
  it('should render image (name, cost, days) without crashing', () => {
    const expectedName = 'name';
    const expectedCost = '$51';
    const expectedDays = 14;
    const component = shallow(<TripSummary name={expectedName} cost={expectedCost} days={expectedDays} tags={[]}/>);
    const renderedName = component.find('.title').text();
    const renderedDays = component.find('.details span:first-child').text();
    const renderedCost = component.find('.details span:last-child').text();
    expect(renderedName).toEqual(expectedName);
    expect(renderedDays).toEqual(`${expectedDays} days`);
    expect(renderedCost).toEqual(`from ${expectedCost}`);
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<TripSummary />)).toThrow();
  });
  it('should render tags without crashing', () => {
    const tagsArray = ['first', 'second', 'three'];
    const component = shallow(<TripSummary tags={tagsArray} />);
    expect(component.find('.tag').at(0)).toEqual[tagsArray[0]];
    expect(component.find('.tag').at(1)).toEqual[tagsArray[1]];
    expect(component.find('.tag').at(2)).toEqual[tagsArray[2]];
  });
  it('should render tags without crashing', () => {
    const component = shallow(<TripSummary tags={[]} />);
    expect(component.find('.tags').exists()).toEqual(true);
    console.log(component.debug());
  });
});