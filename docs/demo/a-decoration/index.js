import React from 'react';
import clsx from 'clsx';
import styles from './style.module.css';

export function AStyleExample ({
  text = 'SPACEXCODE',
  link = 'https://spacexcode.com',
  alt = '太空编程',
  clsName
}) {
  return (
    <a
      className={clsx(styles.aDemo, styles[clsName])}
      href={link}
      alt={alt}
    >
      {text}
    </a>
  )
}
