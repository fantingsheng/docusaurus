import React from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';

export default function (props) {
  const pad = props.pad || '20px';
  const borderBg = props.borderBg || 'linear-gradient(140deg, #cf2f98, #6a3dec)'
  return (
    <div className={clsx(styles.outer, props.hasShadow ? styles.shadow : '')} style={{ background: borderBg }}>
      <div className={styles.gradient}></div>
      <div className={styles.content} style={{ padding: pad }}>
        {props.children}
      </div>
    </div>
  )
}
