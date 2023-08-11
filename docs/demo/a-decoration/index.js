import React from 'react';
import clsx from 'clsx';
import styles from './style.module.scss';

export function AStyleExample ({
  text = '超链接',
  link = 'https://spacexcode.com',
  alt = 'spacexcode',
  clsName
}) {
  return (
    <span className={styles.demo}>我是一个
      <a
        className={clsx(styles.aDemo, styles[clsName])}
        href={link}
        alt={alt}
      >
        {text}
      </a>
    </span>
  )
}
