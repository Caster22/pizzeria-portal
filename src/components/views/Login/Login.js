import React from 'react';
import styles from './Login.module.scss';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';


const Login = () => (
  <div className={styles.component}>
    <div className={styles.inPart}>
      <h2 className={styles.header}>Please Login:</h2>
      <form className={styles.loginForm}>
        <TextField id='login' label='Login' />
        <TextField id='password' label='password' type='password' autoComplete='current-password' />
      </form>
      <Button
        className={styles.loginLink}
        variant='contained'
        color='primary'
        component={ NavLink }
        to={`${process.env.PUBLIC_URL}/dashboard`}
      >
        Log In
      </Button>
    </div>
  </div>
);

export default Login;
