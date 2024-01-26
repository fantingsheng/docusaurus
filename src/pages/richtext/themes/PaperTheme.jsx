import React from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';

export default function PaperTheme ({ config }) {
  const {content, author, bgColor, gradientBgColor, width, theme, ratio, dark, font} = {...config}
  const height = width * ratio + 'px';

  return (
    <div className={clsx(styles.theme, styles[theme + 'Theme'], dark ? styles.dark : '')}
      style={{ 
        backgroundColor: bgColor,
        backgroundImage: gradientBgColor,
        width: config.width + 'px',
        minHeight: height,
        padding: '40px'
      }}
    >
      <div className={styles.main} style={{ backgroundColor: dark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)' }}>
        <svg className={styles.svgFilterBg}><filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix></filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
        <div className={clsx(styles.content, styles['font-' + font])}>
          <div>{content}</div>
          <div className={styles.tb}>{author}</div>
        </div>
      </div>
    </div>
  )
}
