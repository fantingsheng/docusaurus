import React from 'react';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';
import clsx from 'clsx';

const NotesTheme = () => {
    return (
      <Skeleton animation={false} variant="rectangular" width={116} height={68}>
        <div className={clsx(styles.theme, styles.normalTheme)} style={{ backgroundColor: 'rgba(255,255,255,1)' }}>
          <div
            className={styles.content} 
            style={{ backgroundColor: 'rgba(255,255,255,.6)', border: '4px double rgba(0,0,0,.15)', borderRadius: 0 }}
          ></div>
        </div>
      </Skeleton>
    );
}

export default NotesTheme;
