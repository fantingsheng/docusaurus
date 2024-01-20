import React from 'react';
import { useRef, useState, useEffect } from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';

export default function ({ img1, img2, height }) {
  const container = useRef();
  const [width, setWidth] = useState();
  const [transform, setTransform] = useState();

  useEffect(() => {
    const { width: w } = container.current.getBoundingClientRect()
    setTransform(w / 2);
    setWidth(w);
  }, [])

  const onMousedown = () => {
    document.addEventListener('mousemove', onMousemove)
    document.addEventListener('mouseup', onMouseup)
  };
  function onMousemove(evt) {
    const { clientX } = evt
    const { left, width } = container.current.getBoundingClientRect()
    setTransform(Math.max(0, Math.min(clientX - left, width)))
  }
  const onTouchstart = () => {
    document.addEventListener('touchmove', onTouchmove)
    document.addEventListener('touchend', onTouchend)
  };
  function onTouchmove(evt) {
    const { clientX } = evt.touches[0]
    const { left, width } = container?.current?.getBoundingClientRect?.()
    setTransform(Math.max(0, Math.min(clientX - left, width)))
  };
  function onTouchend() {
    document.removeEventListener('touchmove', onTouchmove)
    document.removeEventListener('touchend', onTouchend)
  }

  function onMouseup() {
    document.removeEventListener('mousemove', onMousemove)
    document.removeEventListener('mouseup', onMouseup)
  }
  return (
    <div
      ref={container}
      className={styles.container}
      style={{ width: width + 'px', height: height + 'px' }}
    >
      <div className={styles.img1Wrap}>
        <img width={width} src={img1} alt="code" />
      </div>
      <div style={{ width: transform + 'px' }} className={styles.img2Wrap}>
        <img width={width} src={img2} alt="text" />
      </div>
      <div
        className={styles.touchBar}
        style={{ transform: `translate3d(${transform - 15}px, 0, 0)` }}
        onMouseDown={onMousedown}
        onTouchStart={onTouchstart}
      >
        <div className={styles.centerHandle}>
          <div className={styles.left}></div>
          <div className={styles.right}></div>
        </div>
      </div>
    </div>
  )
}
