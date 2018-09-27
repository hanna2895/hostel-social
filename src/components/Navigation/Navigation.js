import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthUserContext from '../AuthUserContext';
import SignOutButton from '../SignOut/SignOut';
import * as routes from '../../constants/routes';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Navigation = () =>
  <AuthUserContext.Consumer>
    {authUser => authUser
      ? <NavigationAuth />
      : null
    }
  </AuthUserContext.Consumer>

// const NavigationAuth = () => {
//   return (
//     <div>
//       <ul>
//         <li><Link to={routes.LANDING}>Landing</Link></li>
//         <li><Link to={routes.HOME}>Home</Link></li>
//         <li><Link to={routes.ACCOUNT}>Account</Link></li>
//         <li><SignOutButton /></li>
//       </ul>
//     </div>
//   )
// }

class NavigationAuth extends Component  {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null,
    };
  }

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl)
    return (

      
        <AppBar position="static" style={{ marginTop: '2vh' }}>
          <Toolbar>
            <div>
              <IconButton color="inherit" aria-label="Menu">
                <MenuIcon onClick={this.handleMenu}/>
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={this.handleClose}
              >
                <Link onClick={this.handleClose} to={routes.HOME}>Home</Link>
                <Link onClick={this.handleClose} to={routes.ACCOUNT}>Account</Link>
  
              </Menu>
            </div>
            <Typography variant="title" color="inherit">
              Staff Dashboard
            </Typography>
            <SignOutButton />
          </Toolbar> 
        </AppBar>
  
  
      )
  
    }

  
  
}

export default Navigation;
