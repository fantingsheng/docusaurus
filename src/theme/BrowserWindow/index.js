import React from 'react';
import styles from './style.module.css';

export default function BrowserWindow(props) {
  return (
    <div className={styles.browserWindow}>
      <div className={styles.header}>
        <div className={styles.button}>
          <span style={{ background: 'rgb(242, 95, 88)'}}></span>
          <span style={{ background: 'rgb(251, 190, 60)'}}></span>
          <span style={{ background: 'rgb(88, 203, 66)'}}></span>
        </div>
        <div className={styles.address}>https://spacexcode.com</div>
        <div className={styles.menu}>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        {props.children}
      </div>
    </div>
  );
}
