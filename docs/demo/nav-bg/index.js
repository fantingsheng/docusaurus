import React from 'react';
import styles from './style.module.scss';
import clsx from 'clsx';

export function NavBgPage (props) {
  return (
    <div className={styles.page}>
      <div className={styles.navbar}>
        <div className={clsx(styles.navWrapper, props.dot ? styles.dotBg : '')}>
          <div className={styles.logo}>Logo</div>
          <ul>
            <li><a className={styles.on}>首页</a></li>
            <li><a>文档</a></li>
            <li><a>新闻</a></li>
          </ul>
        </div>
      </div>
      <div className={styles.mainBody}>
        <h3>标题部分</h3>
        <p>正文开始。。。</p>
        <p>为了演示导航透明背景的设置，我写了这篇文章，力求让所有人都能明白其中的原理。</p>
        <img src='/img/logo.svg' width='300' />
        <ul>
          <li>写完 html 标签结构</li>
          <li>CSS 实现样式</li>
          <li>特效动作</li>
        </ul>
        <p>当你滚动时，内容处于导航栏的底部是，仔细观察导航栏显示变化</p>
        <p>设置 <code>backdrop-filter</code> 属性</p>
        <p><code>backdrop-filter</code> CSS 属性可以让你为一个元素后面区域添加图形效果（如模糊或颜色偏移）。因为它适用于元素背后的所有元素，为了看到效果，必须使元素或其背景至少部分透明。</p>
        <p>在来点内容撑开，显示出纵向的滚动条</p>
        <pre>
          <code>
          console.log("hello world")
          </code>
        </pre>
      </div>
    </div>
  )
}

export function DotGrid (props) {
  const styleObj = {
    height: props.height,
    backgroundSize: `${props.size}px ${props.size}px`,
    backgroundImage: `radial-gradient(${props.color} 1px,#fff 1px)`
  };
  return (
    <div className={styles.gridLand} style={styleObj}/>
  )
}