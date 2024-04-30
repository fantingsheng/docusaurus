import React from 'react';
import styles from './theme.module.scss';
import clsx from 'clsx';
import { selectDevicon } from '../DevIcons';

const PictureTheme = ({ config }) => {
  const { bgColor, gradientBgColor, font, width, bgImg, ratio, borderRadius, horizPad, vertPad } = config;
  const height = width * ratio + 'px';
  return (
    <div className={styles.pictureTheme}>
      <div
        className={styles.main}
        style={{ backgroundColor: bgColor, backgroundImage: gradientBgColor, height: height, padding: `${vertPad}px ${horizPad}px` }}
      >
        <div className={clsx(styles.content, styles['font-' + font])} style={{ borderRadius: borderRadius + 'px' }}>
          <div className={styles.fullImg} style={{ backgroundImage: `url(${bgImg})` }}></div>
        </div>
      </div>
    </div>
  );
}

export default PictureTheme;
