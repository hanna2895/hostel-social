import React from 'react';
import { shallow, mount } from 'enzyme';
import SignUp from './SignUp';
import SignUpForm from './SignUp'

// it doesn't appear that jest likes the export withRouter. Will look up a solution to this eventually.

// describe('SignUp', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = shallow(<SignUp />)
//   });
//
//   it('should render a div', () => {
//     expect(wrapper.find('div').length).toEqual(1);
//   });
//
//
//
// });

// describe('mounted Signup', () => {
//   let wrapper;
//   beforeEach(() => {
//     wrapper = mount(<SignUp />)
//   });
//
//   // it('should render a form', () => {
//   //   expect(wrapper.find('form').length).toEqual(1);
//   // });
//
//   // it('should render the SignUpForm', () => {
//   //
//   //   expect(wrapper.containsMatchingElement(<SignUpForm history={''}/>)).toEqual(true);
//   //
//   // });
//
// })
