import React from 'react';
import { shallow } from 'enzyme';
import Navigation from './Navigation';

// should write some tests for the conditional rendering eventually

describe('Navigation', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Navigation />)
  });

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });

  // it('should render 5 <li>s', () => {
  //   expect(wrapper.find('li').length).toEqual(5);
  // });
});
