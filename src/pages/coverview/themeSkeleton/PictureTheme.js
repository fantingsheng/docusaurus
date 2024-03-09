import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';

const PictureTheme = () => {
    return (
      <div className={styles.pictureTheme}>
        <Skeleton animation={false} variant="rectangular" sx={{ padding: '8px' }} width={116} height={68}>
          <div className={styles.content}>
            <div className={styles.bt}>
              
            </div>
          </div>
        </Skeleton>
      </div>
    );
}

export default PictureTheme;