import React from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';

export default function GridTheme ({ config }) {
  const {content, author, bgColor, gradientBgColor, theme, width, ratio, font} = {...config}
  const height = width * ratio + 'px';

  return (
    <div className={clsx(styles.theme, styles[theme + 'Theme'])}
      style={{ 
        backgroundColor: bgColor,
        backgroundImage: gradientBgColor,
        width: config.width + 'px',
        minHeight: height,
        padding: '40px'
      }}
    >
      <div className={styles.main} style={{ backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
        <div className={clsx(styles.content, styles['font-' + font])}>
          <div>{content}</div>
          <div className={styles.tb}>{author}</div>
        </div>
      </div>
    </div>
  )
}
