import React from 'react';
import clsx from 'clsx';
import styles from './style.module.css';

export default function Banner () {
  return (
    <div className={clsx('hero', styles.bannerbg)} style={{ height: '25rem' }}>
      <div className="container text--center">
        <h2 className="hero__title">分隔线</h2>
        <p className="hero__subtitle">生动的波纹分隔线</p>
        <div>
          由 SVG 覆盖在页面上形成
        </div>
      </div>
    </div>
  )
}
