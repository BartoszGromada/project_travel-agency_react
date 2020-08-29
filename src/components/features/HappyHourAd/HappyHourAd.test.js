import React from 'react';
import {shallow} from 'enzyme';
import HappyHourAd from './HappyHourAd';

const select = {
  title: 'Lorem ipsum',
  promoDescription: 'promoDescription',
};

describe('Component HappyHourAd', () => {
  it('should render without crashing', () => {
    const component = shallow(<HappyHourAd title={select.title} promoDescription={select.promoDescription}/>);
    expect(component).toBeTruthy();
  });
  it('should throw error without required props', () => {
    expect(() => shallow(<HappyHourAd/>)).toThrow();
  });
  it('should render correct title and promoDescription', () => {
    const component = shallow(<HappyHourAd title={select.title} promoDescription={select.promoDescription}/>);
    expect(component.prop('title')).toBe(select.title);  
    expect(component.prop(select.promoDescription)).toEqual(true);
  });
  /*it('renders correct classNames', () => {
    const mockVariants = 'small dummy';
    const component = shallow(<Hero titleText='Lorem' imageSrc='image.jpg' variant={mockVariants} />);
    expect(component.hasClass('component')).toBe(true);
    expect(component.hasClass('small')).toBe(true);
    expect(component.hasClass('dummy')).toBe(true);
  });*/
});