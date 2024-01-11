import React from 'react';
import styles from './theme.module.scss';
import clsx from 'clsx';
import { selectDevicon } from '../devicon';

const BackgroundTheme = ({ config }) => {
  const { title, bgColor, bgImg, author, icon, font, customIcon, platform } = config;

  return (
    <div className={styles.backgroundTheme}>
      <div className={styles.main} style={{ backgroundColor: bgColor }}>
        <div className={styles.content}>
          <div className={styles.imgWrap}>
            <img src={bgImg} alt="preview" />
          </div>
          <div className={styles.textCover}>
            <div className={clsx(styles.textarea, styles['font-' + font])}>
              <h1>{title}</h1>
              <div className={styles.bt}>
                <h2 className={styles.author}>{author}</h2>
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BackgroundTheme;
