import React from 'react';
import {shallow} from 'enzyme';
import CountrySummary from './CountrySummary';

describe('Component CountrySummary', () => {

  it('should render URL without crashing', () => {
    const expectedURL = 'abc';
    const expectedSource = 'source';
    const expectedTrips = ['trips'];
    const expectedLanguages = [{id: '1', lan: 'lan1'},{id: '2', lan: 'lan2'}];
    const component = shallow(<CountrySummary alpha3Code={expectedURL} flag={expectedSource} trips={expectedTrips} languages={expectedLanguages}/>);
    expect(component.find('.component').prop('to')).toEqual(`/country/${expectedURL}`);
  });
  
  it('should render flag without crashing', () => {
    const expectedSource = './CountrySummary/source';
    const expectedTrips = ['first'];
    const expectedLanguages = [{id: '1', lan: 'lan1'},{id: '2', lan: 'lan2'}];
    const component = shallow(<CountrySummary flag={expectedSource} trips={expectedTrips} languages={expectedLanguages}/>);
    expect(component.find('SideImage').prop('source')).toEqual(expectedSource);
  });

  it('should render region title (name, region, subregion) without crashing', () => {
    const expectedName = 'Jan';
    const expectedRegion = 'Peter Pan';
    const expectedSubregion = 'Bells Village';
    const expectedSource = './CountrySummary/source';
    const expectedTrips = ['first'];
    const expectedLanguages = [{id: '1', lan: 'lan1'},{id: '2', lan: 'lan2'}];
    const component = shallow(<CountrySummary name={expectedName} region={expectedRegion} subregion={expectedSubregion} flag={expectedSource} trips={expectedTrips} languages={expectedLanguages}/>);
    expect(component.find('.name').text()).toEqual(expectedName);
    expect(component.find('.region').text()).toEqual(`${expectedRegion} / ${expectedSubregion}`);
  });

  it('should render Capital without crashing', () => {
    const expectedCapital = 'Capital';
    const expectedSource = './CountrySummary/source';
    const expectedTrips = ['first'];
    const expectedLanguages = [{id: '1', lan: 'lan1'},{id: '2', lan: 'lan2'}];
    const component = shallow(<CountrySummary capital={expectedCapital} flag={expectedSource} trips={expectedTrips} languages={expectedLanguages}/>);
    expect(component.find('ListItem[title^="<strong>Capital:"]').prop('title')).toEqual(`<strong>Capital:</strong> ${expectedCapital}`);
  });

  it('should throw error without required props', () => {
    expect(() => shallow(<CountrySummary />)).toThrow();
  });
  
});