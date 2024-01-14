import React from 'react';
import styles from './theme.module.scss';
import clsx from 'clsx';
import { selectDevicon } from '../DevIcons';

const OutlineTheme = ({ config }) => {
  const { title, bgColor, gradientBgColor, author, icon, font, customIcon, width, ratio } = config;
  const height = width * ratio + 'px';
  return (
    <div className={styles.outlineTheme}>
      <div className={styles.main} style={{ backgroundColor: bgColor, backgroundImage: gradientBgColor, height: height }}>
        <div className={styles.content}>
          <div className={styles.textCover}>
            <div className={clsx(styles.textarea, styles['font-' + font])}>
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
              <h1>{title}</h1>
              <div className={styles.bt}>
                <h2 className={styles.author}>{author}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OutlineTheme;
