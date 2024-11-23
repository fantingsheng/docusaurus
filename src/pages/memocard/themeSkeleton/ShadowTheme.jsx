import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';
import clsx from 'clsx';

const ShadowTheme = () => {
    return (
      <Skeleton animation={false} variant="rectangular" width={116} height={68}>
        <div className={clsx(styles.theme, styles.shadowTheme)}>
          <div className={styles.content}>
          </div>
        </div>
      </Skeleton>
    );
}

export default ShadowTheme;