import React, { useEffect, useState, ReactDOM }  from 'react';
import styles from './style.module.scss';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
// import ReactJson from 'react-json-view';

export default function JsonView (props) {
  const [Comp, setComp] = useState();

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      import('./jsonView').then(module => {
        setComp(() => module.default);
      });
    }
  }, [])

  if (!Comp) {
    // 在组件加载完成前显示加载中的状态
    return <></>;
  }

  // 组件加载完成后，渲染异步加载的组件
  return (
    <div className={styles.viewBox}>
      <Comp {...props} />
    </div>
  )
}
