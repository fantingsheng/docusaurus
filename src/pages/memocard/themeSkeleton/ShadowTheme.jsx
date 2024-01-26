import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';
import clsx from 'clsx';

const ShadowTheme = () => {
    return (
      <Skeleton animation={false} variant="rectangular" width={116} height={68}>
        <div className={clsx(styles.theme, styles.paperTheme)}>
          <div className={styles.content}>
            <svg className={styles.svgFilterBg}><filter id="noise">
              <feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="4" stitchTiles="stitch"></feTurbulence>
              <feColorMatrix type="saturate" values="0"></feColorMatrix></filter>
              <rect width="100%" height="100%" filter="url(#noise)"></rect>
            </svg>
          </div>
        </div>
      </Skeleton>
    );
}

export default ShadowTheme;