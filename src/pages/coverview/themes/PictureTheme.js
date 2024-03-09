import React from 'react';
import styles from './theme.module.scss';
import clsx from 'clsx';
import { selectDevicon } from '../DevIcons';

const PictureTheme = ({ config }) => {
  const { bgColor, gradientBgColor, font, width, bgImg, ratio } = config;
  const height = width * ratio + 'px';
  return (
    <div className={styles.pictureTheme}>
      <div className={styles.main} style={{ backgroundColor: bgColor, backgroundImage: gradientBgColor, height: height }}>
        <div className={clsx(styles.content, styles['font-' + font])}>
          <div className={styles.fullImg} style={{ backgroundImage: `url(${bgImg})` }}></div>
        </div>
      </div>
    </div>
  );
}

export default PictureTheme;
