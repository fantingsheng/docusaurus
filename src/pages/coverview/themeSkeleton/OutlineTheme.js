import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';

const OutlineTheme = () => {
    return (
      <div className={styles.outlineTheme}>
        <Skeleton animation={false} variant="rectangular" sx={{ padding: '8px', position: 'relative' }} width={116} height={68}>
          <div className={styles.content}>
            <Skeleton animation={false} variant="rounded" sx={{ backgroundColor: 'rgba(255, 255, 255)' }} width={10} height={10} />
            <Skeleton animation={false} variant="text" sx={{ backgroundColor: 'rgba(255, 255, 255)' }} width={'100%'} height={10} />
            <Skeleton animation={false} variant="text" sx={{ backgroundColor: 'rgba(255, 255, 255)' }} width={'60%'} height={10} />
            <div className={styles.bt}>
              <Skeleton animation={false} variant="text" sx={{ backgroundColor: 'rgba(255, 255, 255)' }} width={20} height={8} />
            </div>
          </div>
        </Skeleton>
      </div>
    );
}

export default OutlineTheme;
