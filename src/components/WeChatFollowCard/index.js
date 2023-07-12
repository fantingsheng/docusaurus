import React from 'react';
import clsx from 'clsx';
import styles from "./styles.module.css"

export default function WeChatFollowCard() {
  const wechatTitle = "太空编程"
  return (
    <div className={clsx('avatar', styles.qrcard)}>
      <img
        className={styles.qrcodeImg}
        src={'/img/qrcode.png'} />
      <div className="avatar__intro">
        <div className="avatar__name">{ wechatTitle }</div>
        <small className="avatar__subtitle">
          分享硬核的前端编程知识。<br />想及时了解前端相关资讯，请关注作者公众号“<span style={{color: 'red'}}>太空编程</span>”，回复关键字，获取丰富的学习资料。
        </small>
      </div>
    </div>
  )
}
