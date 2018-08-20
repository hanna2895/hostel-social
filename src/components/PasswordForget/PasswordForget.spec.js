import React from 'react';
import { shallow } from 'enzyme';
import PasswordForget from './PasswordForget';

describe('PasswordForget', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PasswordForget />)
  });

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
