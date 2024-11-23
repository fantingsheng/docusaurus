import React, { useState, useCallback, useEffect } from 'react';
import { debounce } from '@site/src/utils';
import clsx from 'clsx';
import styles from './style.module.scss'; 

export default function ResizeBlock ({ maxWidth, minWidth, defaultWidth, children }) {
  const maxW = maxWidth || 920;
  const minW = minWidth || 320;
  const defaultW = defaultWidth || 600;

  const [blockWidth, setBlockWidth] = useState(defaultW);
  const [handSide, setHandSide] = useState('left');
  const [clientX, setClientX] = useState(0)
  // 是否在拖动
  const [isResizing, setIsResizing] = useState(false)

  const handleStartResize = useCallback((e, side) => {
    setHandSide(side)
    setIsResizing(true)
    setClientX(e.clientX)
  }, [])
  const handleStopResize = useCallback(() => {
    setIsResizing(false);
  }, [])

  const didHandleResize = debounce(e => {
    if (!isResizing) return
    const offset = e.clientX - clientX;
    let width = blockWidth
    if (handSide === 'left') {
      width -= offset
    }
    if (handSide === 'right') {
      width += offset
    }
    if (width > maxW) width = maxW;
    if (width < minW) width = minW;
    setClientX(e.clientX);
    setBlockWidth(width);
  }, 0)

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
    <div className={styles.wrapper}>
      <div className={styles.resizeFrame}>
        <div className={clsx(styles.handDrag, styles.dragLeft)} onMouseDown={e => handleStartResize(e, 'left')}></div>
        <div className={clsx(styles.handDrag, styles.dragRight)} onMouseDown={e => handleStartResize(e, 'right')}></div>
        <div className={styles.blockInner} style={{ width: blockWidth ? blockWidth + 'px': 'auto'}}>
          {children}
        </div>
      </div>
    </div>
  )
}