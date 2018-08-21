import React from 'react';
import { shallow } from 'enzyme';
import SignOutButton from './SignOut';

describe('SignIn', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<SignOutButton />)
  });

  it('should render a button', () => {
    expect(wrapper.find('button').length).toEqual(1);
  });
});
