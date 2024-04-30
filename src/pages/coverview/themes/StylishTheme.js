import React from 'react';
import styles from './theme.module.scss';
import clsx from 'clsx';
import { selectDevicon } from '../DevIcons';

const StylishTheme = ({ config }) => {
  const { title, bgColor, bgImg, gradientBgColor, author, icon, font, customIcon, width, ratio, horizPad, vertPad } = config;
  const height = width * ratio + 'px';
  return (
    <div className={styles.stylishTheme}>
      <div className={styles.main} style={{ backgroundColor: bgColor, backgroundImage: gradientBgColor, height: height, padding: `${vertPad}px ${horizPad}px` }}>
        <div className={styles.content}>

          <div className={clsx(styles.left, styles['font-' + font])}>
            <div className={styles.textCenter}>
              <h1>{title}</h1>
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
          <div className={styles.right}>
            <div className={styles.preview} style={{ backgroundImage: `url(${bgImg})` }}>
              {/* <img src={bgImg} alt="preview" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StylishTheme;
