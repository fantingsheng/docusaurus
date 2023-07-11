import clsx from 'clsx';
import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import styles from './style.module.css';
import CodeBlock from '@theme/CodeBlock';
import debounce from '../../theme/ReactLiveScope/debounce'

export default function Main () {
  const maxWidth = 920;
  const minWidth = 520;
  const [blockWidth, setBlockWidth] = useState(520);
  const [isExpand, setIsExpand] = useState(false);
  const [clientX, setClientX] = useState(0)
  // 是否在拖动
  const [isResizing, setIsResizing] = useState(false)
  const handleStartResize = useCallback(e => {
    setIsResizing(true)
    setClientX(e.clientX)
  }, [])
  const handleStopResize = useCallback(() => {
    setIsResizing(false);
  }, [])

  const didHandleResize = debounce(e => {
    if (!isResizing) return
    const offset = e.clientX - clientX;
    let width = offset < 0 ? blockWidth - offset : blockWidth + offset;
    if (width > maxWidth) width = maxWidth;
    if (width < minWidth) width = minWidth;
    setClientX(e.clientX);
    console.log(offset);
    setBlockWidth(width);
  }, 100)

  const handleResize = useCallback(didHandleResize, [isResizing, clientX, didHandleResize])
  useEffect(() => {
    document.addEventListener('mouseup', handleStopResize)
    document.addEventListener('mousemove', handleResize)
    return () => {
      document.removeEventListener('mouseup', handleStopResize)
      document.removeEventListener('mousemove', handleResize)
    }
  }, [handleStopResize, handleResize])

  return (
    <div className='container'>
      <div className='row'>
        <div className='col col--12'>
          <div className={styles.mainWrap}>
            <div
              className={styles.resizeFrame}>
                <div className={clsx(styles.handDrag, styles.dragLeft)} onMouseDown={handleStartResize}></div>
                <div className={clsx(styles.handDrag, styles.dragRight)} onMouseDown={handleStartResize}></div>
                <div style={{ width: blockWidth ? blockWidth + 'px': 'auto'}}>
                  <div
                    className={styles.codeMain}
                    style={{
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
                            <input type='text' value='' onChange={() => {}}></input>
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
