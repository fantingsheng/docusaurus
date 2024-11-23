import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Main from './main';
import styles from './style.module.css';

export default function () {
  return (
    <Layout title='代码片段图片生成工具' description='通过参数将一段代码生成各种样式的图片，方便用于展示代码'>
      <Head>
        <meta name="keywords" content='代码片段,小工具,图片工具,代码图片,代码格式化' />
      </Head>
      <div className={styles.content}>
        <Main />
      </div>
    </Layout>
  )
}
