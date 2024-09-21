import React from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import QrcodeBox from '../QrcodeBox';

export default function NotesTheme ({ config }) {
  const {content, author, bgColor, bgImg, opacity, borderRadius, gradientBgColor, width, theme, dark, vertPad, horizPad, font, fontSize} = {...config}

  return (
    <div className={clsx(styles.theme, styles[theme + 'Theme'], dark ? styles.dark : '')}
      style={{ 
        backgroundColor: '#fff',
        width: width + 'px',
        boxShadow: '3px 3px 10px rgba(0,0,0,0.1)',
        padding: '20px'
      }}
    >
      <div
        className={styles.main}
        style={{
          backgroundColor: dark ? `rgba(0, 0, 0, ${opacity})` : `rgba(255, 255, 255, 0.15)`,
          borderRadius: `0px`,
          border: '2px solid #f8e3c5'
        }}
      >
        <div className={clsx(styles.content, styles['font-' + font])} style={{ fontSize: fontSize + 'px' }}>
          <BrowserOnly>
          {
            () => content.length ? <div className={styles.mainText} dangerouslySetInnerHTML={{__html: content.replace(/\n|\r\n/g, "<br/>") }}></div>
            : <span className={styles.placeholder}>请输入有效的文字内容...</span>
          }
          </BrowserOnly>
          <div className={styles.tb}>
            <div className={styles.author}>{author}</div>
            <QrcodeBox config={config} />
          </div>
        </div>
      </div>
    </div>
  )
}
