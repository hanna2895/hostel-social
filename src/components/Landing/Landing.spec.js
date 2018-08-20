import React from 'react';
import { shallow } from 'enzyme';
import Landing from './Landing';

describe('Landing', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Landing />)
  });

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
