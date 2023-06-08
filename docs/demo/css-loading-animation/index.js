import styles from "./style.module.css"
import React from 'react';
import clsx from 'clsx'

const generateChildrenEle = (length, cls, clsHasIndex = false, bothCls = false) => {
  let childEles = [];
  for (let i = 0; i < length; i++) {
    let clsName = cls;
    if (clsHasIndex) clsName = clsName + (i + 1)
    if (bothCls) {
      childEles.push(<div key={i} className={ clsx(styles[cls], styles[clsName])}></div>)
    } else {
      childEles.push(<div key={i} className={ styles[clsName]}></div>)
    }
  }
  return childEles;
}

export const CssLoadingAnimation1 = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.spinner1}></div>
    </div>
  )
};

export const CssLoadingAnimation2 = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles['sk-chase']}>
        { generateChildrenEle(6, 'sk-chase-dot') }
      </div>
    </div>
  )
};

export const CssLoadingAnimation3 = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles['spinner2']}>
        { generateChildrenEle(2, 'double-bounce', true) }
      </div>
    </div>
  )
};

export const CssLoadingAnimation4 = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles['spinner4']}>
        { generateChildrenEle(5, 'rect', true) }
      </div>
    </div>
  )
};

export const CssLoadingAnimation5 = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles['spinner5']}>
        { generateChildrenEle(2, 'cube', true) }
      </div>
    </div>
  )
};

export const CssLoadingAnimation6 = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles['spinner6']}></div>
    </div>
  )
};

export const CssLoadingAnimation7 = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles['spinner7']}>
        { generateChildrenEle(2, 'dot', true) }
      </div>
    </div>
  )
};

export const CssLoadingAnimation8 = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles['spinner8']}>
        { generateChildrenEle(3, 'bounce', true) }
      </div>
    </div>
  )
};

export const CssLoadingAnimation9 = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles['sk-circle-wrap']}>
        { generateChildrenEle(12, 'sk-circle', true, true) }
      </div>
    </div>
  )
};

export const CssLoadingAnimation10 = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles['sk-cube-grid']}>
        { generateChildrenEle(9, 'sk-cube', true, true) }
      </div>
    </div>
  )
};

export const CssLoadingAnimation11 = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles['sk-fading-circle']}>
        { generateChildrenEle(12, 'sk-circle', true, true) }
      </div>
    </div>
  )
};

export const CssLoadingAnimation12 = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles['sk-folding-cube']}>
        { generateChildrenEle(4, 'sk-cube', true, true) }
      </div>
    </div>
  )
};
