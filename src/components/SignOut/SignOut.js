import React from 'react';
import Button from '@material-ui/core/Button';

import { auth } from '../../firebase';

const SignOutButton = () => {
  return (
    <Button
      type="button"
      onClick={auth.doSignOut}
      style={{ 
        display: "inline",
        marginLeft: 'auto',
        marginRight: '1vw',
        marginTop: '1.5vh',
        color: 'white'
      }}
    >
      Sign Out
    </Button>
  )
}

export default SignOutButton;
