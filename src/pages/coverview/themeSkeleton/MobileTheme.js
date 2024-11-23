import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';

const MobileTheme = () => {
    return (
      <div className={styles.mobileTheme}>
        <Skeleton animation={false} variant="rectangular" sx={{ padding: '8px 8px 0' }} width={116} height={68}>
          <div className={styles.content}>
            <div className={styles.left}>
              <Skeleton animation={false} variant="text" width={'100%'} sx={{ backgroundColor: 'rgba(255, 255, 255)' }} height={10} />
              <Skeleton animation={false} variant="text" width={'100%'} sx={{ backgroundColor: 'rgba(255, 255, 255)' }} height={10} />
              <Skeleton animation={false} variant="text" width={'70%'} sx={{ backgroundColor: 'rgba(255, 255, 255)' }} height={10} />
            </div>
            <div className={styles.right}>
              <div className={styles.mobile}>
                <div className={styles.header}>
                  <div className={styles.audio}></div>
                  <div className={styles.view}></div>
                </div>
              </div>
            </div>
          </div>
        </Skeleton>
      </div>
    );
}

export default MobileTheme;