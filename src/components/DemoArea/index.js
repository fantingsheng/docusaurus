import React from 'react';
import clsx from 'clsx';
import styles from "./styles.module.css"

export default function DemoArea({ title, children }) {
  const demoTitle = title || "DEMO"
  return (
    <div className={styles.demoArea}>
      <div className={styles.demoRibbon}>
        <span className={styles.demoTitle}>{demoTitle}</span>
      </div>
      <div className={styles.demoContent}>{children}</div>
    </div>
  )
}
