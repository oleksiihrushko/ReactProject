import React from 'react';
import styles from './OneIncome.module.css';

const OneIncomeEmpty = () => {
  return (
    <li className={styles.operationListItem}>
      <p className={styles.date}> </p>
      <p className={styles.category}> </p>
      <p className={styles.price}> </p>
    </li>
  );
};

export default OneIncomeEmpty;
