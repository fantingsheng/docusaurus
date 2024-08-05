import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';
import clsx from 'clsx';

const Paper2Theme = () => {
    return (
      <Skeleton animation={false} variant="rectangular" width={116} height={68}>
        <div className={clsx(styles.theme, styles.paper2Theme)}>
          <div className={styles.content}>
            <div className={styles.svgFilterBg} style={{ backgroundImage: 'url(/page/paper.jpg)' }}>
            </div>
          </div>
        </div>
      </Skeleton>
    );
}

export default Paper2Theme;