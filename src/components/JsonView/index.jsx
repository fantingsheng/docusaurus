import React from 'react';
import ReactJson from 'react-json-view';
import styles from './style.module.scss';

export default function JsonView (props) {
  return (
    <div className={styles.viewBox}>
      <ReactJson displayObjectSize={false} {...props} />
    </div>
  )
}