import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';

const StylishTheme = () => {
    return (
      <div className={styles.stylishTheme}>
        <Skeleton animation={false} variant="rectangular" sx={{ padding: '8px' }} width={116} height={68}>
          <div className={styles.content}>
            <div className={styles.left}>
              <Skeleton animation={false} variant="text" width={'100%'} height={10} />
              <Skeleton animation={false} variant="text" width={'70%'} height={10} />
              <div className={styles.bt}>
                <Skeleton animation={false} variant="rounded" width={10} height={10} />
                <Skeleton animation={false} variant="text" width={'20%'} height={8} />
              </div>
            </div>
            <div className={styles.right}>
              <Skeleton animation={false} variant="rectangular" width={'100%'} height={'100%'} />
            </div>
          </div>
        </Skeleton>
      </div>
    );
}

export default StylishTheme;