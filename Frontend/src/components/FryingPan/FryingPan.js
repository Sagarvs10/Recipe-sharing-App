import React from 'react';
import styles from './FryingPan.module.css';

const FryingPan = () => {
  return (
    <div className={styles.cooking}>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.bubble}></div>
      <div className={styles.area}>
        <div className={styles.sides}>
          <div className={styles.pan}></div>
          <div className={styles.handle}></div>
        </div>
        <div className={styles.pancake}>
          <div className={styles.pastry}></div>
        </div>
      </div>
    </div>
  );
};

export default FryingPan;
