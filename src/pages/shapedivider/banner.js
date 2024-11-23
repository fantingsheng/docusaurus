import React from 'react';
import clsx from 'clsx';
import styles from './style.module.css';

export default function Banner () {
  return (
    <div className={clsx('hero', styles.bannerbg)} style={{ height: '28rem' }}>
      <div className="container text--center">
        <h2 className="hero__title margin-bottom--lg">自定义形状的分隔线</h2>
        <p>这是一段关于 SVG 图像和背景图的故事，由于它们的意外组合，完美演绎了一段不一样的风景。</p>
        <p className="">可以利用这个工具为你生成一个特定形状和颜色的 SVG 格式文件，然后结合 CSS 代码与<br/>网页内容进行定位，巧妙地成为背景的一部分，从而让原背景图具有一定的形状。</p>
      </div>
    </div>
  )
}
