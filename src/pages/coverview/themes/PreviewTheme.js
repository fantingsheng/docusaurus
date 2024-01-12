import React from 'react';
import styles from './theme.module.scss';
import clsx from 'clsx';
import { selectDevicon } from '../devicon';

const PreviewTheme = ({ config }) => {
    const { title, bgColor, bgImg, gradientBgColor, icon, font, customIcon, platform } = config;

    return (
      <div className={styles.previewTheme}>
        <div className={styles.main} style={{ backgroundColor: bgColor, backgroundImage: gradientBgColor }}>
          <div className={clsx(styles.content, styles['font-' + font])}>
            <h1>{title}</h1>
            <div className={styles.window}>
              <div className={styles.searchBar}>
                  <div className={styles.circle} style={{ backgroundColor: 'rgb(248 113 113/1)' }}></div>
                  <div className={styles.circle} style={{ backgroundColor: 'rgb(250 204 21/1)' }}></div>
                  <div className={styles.circle} style={{ backgroundColor: 'rgb(74 222 128/1)' }}></div>
              </div>
              <div className={styles.preview}>
                <img src={bgImg && bgImg} alt="preview" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default PreviewTheme;
