import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';

const ModernTheme = () => {
    return (
      <div className={styles.modernTheme}>
        <Skeleton animation={false} variant="rectangular" sx={{ padding: '8px', position: 'relative' }} width={116} height={68}>
          <div className={styles.content}>
            <div className={styles.left}>
              <div className={styles.icon}>
                <Skeleton animation={false} variant="rounded" width={10} height={10} />
              </div>
            </div>
            <div className={styles.right}>
              <Skeleton animation={false} variant="text" width={'100%'} height={10} />
              <Skeleton animation={false} variant="text" width={'100%'} height={10} />
              <Skeleton animation={false} variant="text" width={'60%'} height={10} />
              <div className={styles.bt}>
                <Skeleton animation={false} variant="text" width={20} height={8} />
              </div>
            </div>
          </div>
        </Skeleton>
      </div>
    );
}

export default ModernTheme;
