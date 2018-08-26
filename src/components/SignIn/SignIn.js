import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

//styles and UI components
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../index.css'
import './SignIn.css'

import { SignUpLink } from '../SignUp/SignUp';
import { PasswordForgetLink } from '../PasswordForget/PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const SignInPage = ({history}) => {
  return (
    <div className="landing">
      <Paper className="login-card">
        <Link to={routes.LANDING} className="close">X</Link>
        <h2> Sign In </h2>
        <SignInForm history={history} />
        <PasswordForgetLink />
        <SignUpLink />
      </Paper>
    </div>
  )
}

const byPropKey = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    event.preventDefault();

    const {
      email, password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(byPropKey('error', error));
      })

    event.preventDefault();
  };

  render() {
    const {
      email, password, error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <TextField
          id="full-width"
          placeholder="Email Address"
          fullWidth
          onChange={event => this.setState(byPropKey('email', event.target.value))}
          margin="normal"
        />
        <TextField
          id="password-input"
          type="password"
          placeholder="Password"
          fullWidth
          margin="normal"
          onChange={event => this.setState(byPropKey('password', event.target.value))}
        />
        <Button  variant="contained" disabled={isInvalid} color="primary" type="submit">
          Sign In
        </Button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignInLink = () => {
  return (
    <p> Already have an account?
      {' '}
      <Link to={routes.SIGN_IN}>Sign In</Link>
    </p>
  )
}

export default withRouter(SignInPage);

export {
  SignInForm,
  SignInLink,
}
