import React from 'react';
import styles from './theme.module.scss';
import clsx from 'clsx';
import { selectDevicon } from '../DevIcons';

const BasicTheme = ({ config }) => {
  const { title, bgColor, gradientBgColor, author, icon, font, customIcon, width, ratio, borderRadius } = config;
  const height = width * ratio + 'px';
  return (
    <div className={styles.basicTheme}>
      <div className={styles.main} style={{ backgroundColor: bgColor, backgroundImage: gradientBgColor, height: height }}>
        <div className={clsx(styles.content, styles['font-' + font])} style={{ borderRadius: borderRadius + 'px' }}>
          <div style={{ padding: '0 3rem' }}>
            <h1>{title}</h1>
          </div>
          <div className={styles.bt}>
            {
              customIcon ?
                <div className={styles.customIcon}>
                  <img src={customIcon} alt="img" />
                </div>
                :
                <div className={styles.devicon}>
                  {selectDevicon(icon)}
                </div>
            }
            <h2 className={styles.author}>{author}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BasicTheme;
