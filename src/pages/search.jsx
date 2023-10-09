import React from 'react';
import { useRef } from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Search from "@site/src/theme/SearchBar";
import styles from './index.module.css';
import { Stack, Chip, Typography } from '@mui/material';

function HomepageHeader() {
  return (
    <header className={clsx('hero hero--primary', styles.searchBanner)}>
      <div className='container'>
        <div className='padding-vert--lg'>
          <h1 className='hero__title'>找不到你想要的？</h1>
          <p className='hero__subtitle'>为什么不搜一搜 🔍</p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const searchRef = useRef()
  const searchList = [
    'React',
    'CSS 加载动画	',
    'Vue 解决方案',
    '代码片段',
    '下载资源',
    'CSS 网格背景',
    '响应式原理',
    '常见 UI 框架',
    '网页图标',
    '像素网格背景',
    '键盘大写锁定',
    'css 树状图',
    '代码在线运行工具',
    '虚拟DOM',
    '受控组件和非受控组件'
  ];

  const handleClick = (val) => {
    searchRef.current.changeSearchVal(val)
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
                <Search show={true} ref={searchRef} />
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
            <div className='col col--8 col--offset-2'>
              <div className='margin-bottom--xl'>
                <h3>强大的本地搜索</h3>
                <p>只需加载一次，即可快速响应您的搜索。<br />
                  搜索功能由<a href="https://github.com/praveenn77/docusaurus-lunr-search"> docusaurus-lunr-search </a>提供技术支持。</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
