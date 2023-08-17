import React from 'react';
import { forwardRef, useRef } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Search from "@site/src/theme/SearchBar";
import styles from './index.module.css';
import { Stack, Chip, Typography } from '@mui/material';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.searchBanner)}>
      <div className='container'>
        <h1 className='hero__title'>找不到你想要的？</h1>
        <p className='hero__subtitle'>为什么不搜一搜</p>
      </div>
    </header>
  );
}

export default function Home() {
  const searchRef = useRef(null)
  const searchList = [
    'React',
    'CSS Loading 加载效果',
    'Vue 解决方案',
    '代码片段',
    '下载资源',
    '响应式原理',
    '常见 UI 框架',
    '代码在线运行工具',
    '函数式编程'
  ];

  const SearchTool = forwardRef((props, ref) => {
    return <Search {...props} ref={ref} />
  });

  const handleClick = (val) => {
    console.log(val)
    searchRef.current.value = val;
  };
  return (
    <Layout
      title='全站搜索'
      description='输入任何你想搜索的内容。'>
      <HomepageHeader />
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col col--8 col--offset-2'>
              <div className='padding-top--xl padding-bottom--lg'>
                <SearchTool show={true} ref={searchRef} />
              </div>
            </div>
            <div className='col col--8 col--offset-2'>
            <Typography variant="subtitle1" gutterBottom>
              他们经常搜索的内容：
            </Typography>
              <div className='margin-bottom--xl'>
                <Stack direction="row" spacing={2} useFlexGap flexWrap='wrap'>
                  {
                    searchList.map((item, index) => (
                      <Chip label={item} key={index} variant='outlined' onClick={() => handleClick(item)} />
                    ))
                  }
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
