import React from 'react';
import styles from './Waiter.module.scss';
import {Link} from 'react-router-dom';

const Waiter = (value) => {
  const id = value.match.params.id;

  return(
    <div className={styles.component}>
      <h2>Waiters View</h2>
      <Link to={process.env.PUBLIC_URL + '/waiter/order/new'} >
        <span>New booking </span>
      </Link>
      <Link to={process.env.PUBLIC_URL + `/waiter/order/${id}`} >
        <span>New booking :id </span>
      </Link>
    </div>
  );
};

export default Waiter;
