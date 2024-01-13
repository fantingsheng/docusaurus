import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';

const PreviewTheme = () => {
    return (
      <div className={styles.previewTheme}>
        <Skeleton animation={false} variant="rectangular" sx={{ paddingTop: '5px' }} width={116} height={68}>
          <div className={styles.content}>
            <Skeleton animation={false} variant="text" width={'60%'} sx={{ backgroundColor: 'rgba(255, 255, 255)' }} height={10} />
            <div className={styles.preview}>
              <div className={styles.toolbar}>
                <span></span><span></span><span></span>
              </div>
            </div>
          </div>
        </Skeleton>
      </div>
    );
}

export default PreviewTheme;
