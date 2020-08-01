import React from 'react';
import styles from './Tables.module.scss'

const Booking = (value) => {
  const id = value.match.params.id;

  return(
    <div className={styles.component}>
      <h2>Table View --> {id}</h2>
    </div>
  );
};

export default Booking;
