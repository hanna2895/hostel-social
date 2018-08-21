import React from 'react';
import { Link } from 'react-router-dom';
import SignOutButton from '../SignOut/SignOut';
import * as routes from '../../constants/routes';

const Navigation = ({ authUser }) => {
  console.log(authUser, 'this is porps from navigation')
  return (
    <div>
      { authUser
          ? <NavigationAuth />
          : <NavigationNonAuth />
      }
    </div>
  )
}

const NavigationAuth = () => {
  console.log('navigation auth is being called')
  return (
    <div>
      <ul>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><Link to={routes.HOME}>Home</Link></li>
        <li><Link to={routes.ACCOUNT}>Account</Link></li>
        <li><SignOutButton /></li>
      </ul>
    </div>
  )
}

const NavigationNonAuth = () => {
  console.log('navigation nonauth is being called')
  return (
    <div>
      <ul>
        <li><Link to={routes.LANDING}>Landing</Link></li>
        <li><Link to={routes.SIGN_IN}>Sign In</Link></li>
      </ul>
    </div>
  )
}

export default Navigation;
