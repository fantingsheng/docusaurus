// import style from './style.css'
import clsx from 'clsx'
import React from 'react';

export const CssLoadingAnimation1 = () => {
  return (
    <div className="loading-wrapper">
      <div className={clsx('spinner')}></div>
    </div>
  )
}

export const CssLoadingAnimation2 = () => {
  return (
    <div className={clsx('skChase')}>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
      <div className="sk-chase-dot"></div>
    </div>
  )
}
