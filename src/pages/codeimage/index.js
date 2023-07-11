import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import Main from './main';
import styles from './style.module.css';

export default function () {
  return (
    <Layout title='代码片段图片生成工具' description=''>
      <div className={styles.content}>
        <Main />
      </div>
    </Layout>
  )
}
