import React from 'react';
import styles from './theme.module.scss';
import clsx from 'clsx';

const MobileTheme = ({ config }) => {
  const { title, bgColor, bgImg, gradientBgColor, icon, font, customIcon, width, ratio } = config;
  const height = width * ratio + 'px';
  return (
    <div className={styles.mobileTheme}>
      <div className={styles.main} style={{ backgroundColor: bgColor, backgroundImage: gradientBgColor, height: height }}>
        <div className={clsx(styles.content, styles['font-' + font])}>
          <div className={styles.left}>
            <h1>{title}</h1>
          </div>
          <div className={styles.right}>
            <div className={styles.mobile}>
              <div className={styles.header}>
                <div className={styles.microphone}></div>
                <div className={styles.receiver}></div>
              </div>
              <div className={styles.preview}>
                <img src={bgImg && bgImg} alt="preview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileTheme;
