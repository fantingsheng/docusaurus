import React from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';
import QrcodeBox from '../QrcodeBox';

export default function NormalTheme ({ config }) {
  const {content, author, bgColor, url, gradientBgColor, width, theme, dark, vertPad, horizPad, font} = {...config}

  return (
    <div className={clsx(styles.theme, styles[theme + 'Theme'], dark ? styles.dark : '')}
      style={{ 
        backgroundColor: bgColor,
        backgroundImage: gradientBgColor,
        width: width + 'px',
        padding: `${vertPad}px ${horizPad}px`
      }}
    >
      <div className={styles.main} style={{ backgroundColor: dark ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)' }}>
        <div className={clsx(styles.content, styles['font-' + font])}>
          <div dangerouslySetInnerHTML={{__html: content.replace(/\n|\r\n/g, "<br/>")}}></div>
          <div className={styles.tb}>
            <div className={styles.author}>{author}</div>
            <QrcodeBox config={config} />
          </div>
        </div>
      </div>
    </div>
  )
}
