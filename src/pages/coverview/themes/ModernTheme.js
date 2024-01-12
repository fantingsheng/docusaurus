import React from 'react';
import styles from './theme.module.scss';
import clsx from 'clsx';
import { selectDevicon } from '../Devicon';

const ModernTheme = ({ config }) => {
    const { title, bgColor, bgImg, gradientBgColor, author, icon, font, customIcon, platform } = config;

    return (
      <div className={styles.modernTheme}>
        <div className={styles.main} style={{ backgroundColor: bgColor, backgroundImage: gradientBgColor }}>
          <div className={styles.content}>
            <div className={clsx(styles.left, styles['font-' + font])}>
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
            <div className={styles.right}>
              <div className={styles.textarea}>
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

export default ModernTheme;
