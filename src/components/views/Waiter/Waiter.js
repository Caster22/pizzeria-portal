import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = () => (
  <div className={styles.component}>
    <h2>Waiters View</h2>
    <Link to={process.env.PUBLIC_URL + '/waiter/order/new'} >
      <span>New order</span>
    </Link>
    <Link to={process.env.PUBLIC_URL + '/waiter/order/${:id}'} >
      <span> New</span>
    </Link>
  </div>
);

export default Waiter;
