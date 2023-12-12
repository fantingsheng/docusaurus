import React from 'react';
import clsx from 'clsx';
import styles from './style.module.css';

export default function Banner () {
  return (
    <div className={clsx('hero', styles.bannerbg)} style={{ height: '28rem' }}>
      <div className="container text--center">
        <h2 className="hero__title">优美的分隔线</h2>
        <p className="hero__subtitle">为你的网页生成一条独特的弧线分隔线</p>
        <div>
          这是一段关于 SVG 图像和背景图的故事，由于它们的意外组合，完美演绎了一段不一样的风景。
        </div>
      </div>
    </div>
  )
}
