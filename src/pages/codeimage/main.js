import clsx from 'clsx';
import React from 'react';
import styles from './style.module.css';
import CodeBlock from '@theme/CodeBlock';

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
                      <div className={styles.frameWindow}>
                        <div className={styles.winHeader}>
                          <div className={styles.controller}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <div className={styles.fileName}>
                            <input type='text' value=''></input>
                            <span>Untitled-1</span>
                          </div>
                        </div>
                        <div className={styles.codeArea}>
                          <CodeBlock
                            className={styles.codeEditor}
                            language="jsx">
                            {`function Hello () {
                              return 'dddd';
                            }`}
                          </CodeBlock>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
