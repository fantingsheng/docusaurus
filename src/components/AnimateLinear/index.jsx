import React from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';

export default function (props) {
  return (
    <div className={clsx(styles.outer, props.hasShadow ? styles.shadow : '')}>
      <div className={styles.gradient}></div>
      <div className={styles.content}>
        {props.children}
      </div>
    </div>
  )
}