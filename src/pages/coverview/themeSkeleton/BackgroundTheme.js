import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';

const BackgroundTheme = () => {
    return (
      <div className={styles.backgroundTheme}>
        <Skeleton animation={false} variant="rectangular" sx={{ padding: '8px', position: 'relative' }} width={116} height={68}>
          <div className={styles.bgIcon}><PhotoIcon /></div>
          <div className={styles.content}>
            <Skeleton animation={false} variant="text" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} width={66} height={10} />
            <Skeleton animation={false} variant="text" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} width={50} height={10} />
            <div className={styles.bt}>
              <Skeleton animation={false} variant="text" sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)' }} width={20} height={8} />
              <Skeleton animation={false} variant="rounded" sx={{ marginTop: '3px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }} width={10} height={10} />
            </div>
          </div>
        </Skeleton>
      </div>
    );
}

export default BackgroundTheme;