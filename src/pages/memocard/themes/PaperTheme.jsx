import React from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';
import BrowserOnly from '@docusaurus/BrowserOnly';
import QrcodeBox from '../QrcodeBox';

export default function PaperTheme ({ config }) {
  const {content, author, bgColor, bgImg, opacity, borderRadius, gradientBgColor, width, theme, vertPad, horizPad, dark, font, fontSize} = {...config}

  return (
    <div className={clsx(styles.theme, styles[theme + 'Theme'], dark ? styles.dark : '')}
      style={{ 
        backgroundColor: bgColor,
        backgroundImage: bgImg ? `url(${bgImg})` :  gradientBgColor,
        width: width + 'px',
        padding: `${vertPad}px ${horizPad}px`
      }}
    >
      <div className={styles.main} style={{ backgroundColor: dark ? `rgba(0, 0, 0, ${opacity})` : `rgba(255, 255, 255, ${opacity})`, borderRadius: `${borderRadius}px` }}>
        <svg className={styles.svgFilterBg}><filter id="noise">
          <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch"></feTurbulence>
          <feColorMatrix type="saturate" values="0"></feColorMatrix></filter>
          <rect width="100%" height="100%" filter="url(#noise)"></rect>
        </svg>
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
