import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';

const BasicTheme = () => {
    return (
      <div className={styles.basicTheme}>
        <Skeleton animation={false} variant="rectangular" sx={{ paddingTop: '10px' }} width={120} height={72}>
          <div className={styles.content}>
            <Skeleton animation={false} variant="text" width={'100%'} height={10} />
            <Skeleton animation={false} variant="text" width={'70%'} height={10} />
            <div className={styles.bt}>
              <Skeleton animation={false} variant="rounded" width={10} height={10} />
              <Skeleton animation={false} variant="text" width={'20%'} height={8} />
            </div>
          </div>
        </Skeleton>
      </div>
    );
}

export default BasicTheme;