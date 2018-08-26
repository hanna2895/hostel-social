import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

// styles and UI components
import '../../index.css';
import './SignUp.css';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { SignInLink } from '../SignIn/SignIn';

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const SignUp = ({history}) => {
    return (
      <div className="landing">
        <Paper className="login-card">
          <Link to={routes.LANDING} className="close">X</Link>
          <h2>Sign Up </h2>
          <SignUpForm history={history} />
          <SignInLink />
        </Paper>
      </div>
    )
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {...INITIAL_STATE}
  }

  onSubmit = (event) => {
    const {
      history,
    } = this.props;

    const {
      username,
      email,
      passwordOne,
    } = this.state;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // create a user in my firebase database too in addition to the one just
        // for authentication
        // ----> this is where you would add other data about the user
        db.doCreateUser(authUser.user.uid, username, email)
          .then(() => {
            this.setState({ ...INITIAL_STATE });
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(byPropKey('error', error));
          });
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === "" ||
      email === "" ||
      username === "";

    return (
        <form onSubmit={this.onSubmit}>
          <TextField
            value={username}
            onChange={event => this.setState(byPropKey('username', event.target.value))}
            type="text"
            placeholder="Full Name"
            fullWidth
            margin="normal"
          />
          <TextField
            value={email}
            onChange={event => this.setState(byPropKey('email', event.target.value))}
            type="text"
            placeholder="Email Address"
            fullWidth
            margin="normal"
          />
          <TextField
            value={passwordOne}
            onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
            type="password"
            placeholder="Password"
            fullWidth
            margin="normal"
          />
          <TextField
            value={passwordTwo}
            onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
            type="password"
            placeholder="Confirm Password"
            fullWidth
            margin="normal"
          />
          <Button variant="contained" color="primary" disabled={isInvalid} type="submit">
            Sign Up
          </Button>

          { error && <p>{error.message}</p> }
        </form>
    )
  }
}

const SignUpLink = () => {
  return (
    <p> Don't have an account?
      {' '}
      <Link to={routes.SIGN_UP}>Sign Up</Link>
    </p>
  )
}

export default withRouter(SignUp);

export { SignUpForm, SignUpLink };
