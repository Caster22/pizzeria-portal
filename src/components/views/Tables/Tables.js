import React from 'react';
import styles from './Tables.module.scss';
import {Link} from 'react-router-dom';

const Tables = (value) => {
  const id = value.match.params.id;

  return(
    <div className={styles.component}>
      <h2>Tables View</h2>
      <Link to={process.env.PUBLIC_URL + '/tables/booking/new'} >
        <span>New booking </span>
      </Link>
      <Link to={process.env.PUBLIC_URL + `/tables/booking/${id}`} >
        <span>New booking :id </span>
      </Link>
      <Link to={process.env.PUBLIC_URL + '/tables/events/new'} >
        <span>New booking </span>
      </Link>
      <Link to={process.env.PUBLIC_URL + `/tables/events/${id}`} >
        <span>New booking :id </span>
      </Link>
    </div>
  );
};

export default Tables;
