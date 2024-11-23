import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';
import clsx from 'clsx';

const GridTheme = () => {
    return (
      <Skeleton animation={false} variant="rectangular" width={116} height={68}>
        <div className={clsx(styles.theme, styles.gridTheme)}>
          <div className={styles.content}></div>
        </div>
      </Skeleton>
    );
}

export default GridTheme;