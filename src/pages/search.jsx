import React from 'react';
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
        <p className='hero__subtitle'>干嘛不搜一搜</p>
      </div>
    </header>
  );
}

export default function Home() {
  return (
    <Layout
      title='全站搜索'
      description='输入任何你想搜索的内容。'>
      <HomepageHeader />
      <main>
        <div className='container'>
          <div className='row'>
            <div className='col col--8 col--offset-2'>
              <div className='padding-vert--lg'>
                <Search show={true} />
              </div>
            </div>
            <div className='col col--8 col--offset-2'>
            <Typography variant="subtitle1" gutterBottom>
              他们经常搜索的内容：
            </Typography>
              <div className='margin-bottom--lg'>
                <Stack direction="row" spacing={1}>
                  <Chip label="React" variant="outlined" />
                  <Chip label="CSS Loading 效果" variant="outlined" />
                  <Chip label="Vue 解决方案" variant="outlined" />
                </Stack>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
