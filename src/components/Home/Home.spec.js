import React from 'react';
import { shallow } from 'enzyme';
import HomePage from './Home';

describe('Home', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<HomePage />)
  });

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
