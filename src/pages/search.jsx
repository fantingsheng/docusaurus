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
          </div>
          <div className='row'>
            <div className='col col--8 col--offset-2'>
              <div className={clsx(styles.starList, 'margin-bottom--lg')}>
                <h4><svg width="32" height="32" viewBox="0 0 64 64" fill="none"><path d="M39.64 40.83L33.87 56.7a1.99 1.99 0 0 1-3.74 0l-5.77-15.87a2.02 2.02 0 0 0-1.2-1.2L7.3 33.88a1.99 1.99 0 0 1 0-3.74l15.87-5.77a2.02 2.02 0 0 0 1.2-1.2L30.12 7.3a1.99 1.99 0 0 1 3.74 0l5.77 15.87a2.02 2.02 0 0 0 1.2 1.2l15.86 5.76a1.99 1.99 0 0 1 0 3.74l-15.87 5.77a2.02 2.02 0 0 0-1.2 1.2z" fill="#FFC017"></path></svg>
                  强大的本地搜索</h4>
                <p>只需加载一次，即可快速响应您的搜索。<br />
                  搜索功能由<a href="https://github.com/praveenn77/docusaurus-lunr-search"> docusaurus-lunr-search </a>提供技术支持。</p>
              </div>
            </div>
            <div className='col col--8 col--offset-2'>
              <div className={clsx(styles.starList, 'margin-bottom--lg')}>
                <h4><svg width="32" height="32" viewBox="0 0 64 64" fill="none"><path d="M39.64 40.83L33.87 56.7a1.99 1.99 0 0 1-3.74 0l-5.77-15.87a2.02 2.02 0 0 0-1.2-1.2L7.3 33.88a1.99 1.99 0 0 1 0-3.74l15.87-5.77a2.02 2.02 0 0 0 1.2-1.2L30.12 7.3a1.99 1.99 0 0 1 3.74 0l5.77 15.87a2.02 2.02 0 0 0 1.2 1.2l15.86 5.76a1.99 1.99 0 0 1 0 3.74l-15.87 5.77a2.02 2.02 0 0 0-1.2 1.2z" fill="#FFC017"></path></svg>
                  精准的模糊匹配</h4>
                <p>根据你搜索的内容进行全站内容的关键字匹配</p>
              </div>
            </div>
            <div className='col col--8 col--offset-2'>
              <div className={clsx(styles.starList, 'margin-bottom--lg')}>
                <h4><svg width="32" height="32" viewBox="0 0 64 64" fill="none"><path d="M39.64 40.83L33.87 56.7a1.99 1.99 0 0 1-3.74 0l-5.77-15.87a2.02 2.02 0 0 0-1.2-1.2L7.3 33.88a1.99 1.99 0 0 1 0-3.74l15.87-5.77a2.02 2.02 0 0 0 1.2-1.2L30.12 7.3a1.99 1.99 0 0 1 3.74 0l5.77 15.87a2.02 2.02 0 0 0 1.2 1.2l15.86 5.76a1.99 1.99 0 0 1 0 3.74l-15.87 5.77a2.02 2.02 0 0 0-1.2 1.2z" fill="#FFC017"></path></svg>
                  快速触达目标页</h4>
                <p>支持上下按键进行搜索内容条目的切换，点击或 Enter 键即可到达内容页面</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
