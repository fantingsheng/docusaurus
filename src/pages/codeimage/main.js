import clsx from 'clsx';
import React from 'react';
import styles from './style.module.css';

export default function Main () {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col--12'>
          <div className={styles.mainWrap}>
            <div
              className={styles.resizeFrame}>
                <div className={clsx(styles.handDrag, styles.dragLeft)}></div>
                <div className={clsx(styles.handDrag, styles.dragRight)}></div>
                <div style={{ width: 'auto'}}>
                  <div
                    className={styles.codeMain}
                    style={{
                      width: 'auto',
                      padding: '64px',
                      backgroundImage: 'linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))'
                    }}>

                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
