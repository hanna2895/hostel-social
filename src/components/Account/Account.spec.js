import React from 'react';
import { shallow } from 'enzyme';
import Account from './Account';

describe('Account', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Account />)
  });

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
