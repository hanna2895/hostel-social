import React from 'react';
import { shallow } from 'enzyme';
import PasswordForgetPage from './PasswordForget';

describe('PasswordForget', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<PasswordForgetPage />)
  });

  it('should render a div', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
});
