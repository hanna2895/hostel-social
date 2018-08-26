import React from 'react';
import '../../index.css'
import './Landing.css';
import { Link } from 'react-router-dom';
import * as routes from '../../constants/routes';


const Landing = () => {
  return (
    <div className="landing">
      <h2>Welcome to</h2>
      <h1>Hostel Social</h1>
      <Link to={routes.SIGN_IN} className="sign-up-button">Sign Up</Link>

    </div>
  )
}

export default Landing;
