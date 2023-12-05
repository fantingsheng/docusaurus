import React, { useState } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import { useHistory } from "@docusaurus/router";
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageCodeBlock from '@site/src/components/HomepageCodeBlock';
import { Paper, InputBase, Divider, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DirectionsIcon from '@mui/icons-material/Directions';
import styles from './index.module.css';
import confetti from 'canvas-confetti';

function SearchBar () {
  const [searchVal, setSearchVal] = useState('')
  const history = useHistory()
  const handleInput = (e) => {
    if (searchVal) {
      history.push(`/search?value=${searchVal}`)
    } else {
      console.log(e)
      // var pineapple = confetti.shapeFromText({ text: '🍍', 1 })
      confetti({
        // shapes: [pineapple], // 粒子形状、类型
        // colors: ['#303948'] // 粒子颜色
        particleCount: 120, // 默认值：50，要发射的五彩纸屑的数量。
        startVelocity: 30, // 默认值：45，五彩纸屑开始移动的速度，以像素为单位
        angle: 270, // 发射的角度，0 表示水平向右；90 表示垂直向上；180 表示水平向左；270 表示垂直向下
        spread: 180, //默认值：45，五彩纸屑在垂直方向扩散的角度，45 表示五彩纸屑以垂直方向正负 22.5 度角发射
        ticks: 300, // 默认值: 200 ，值越小粒子消失得越快，值越大粒子消失得越慢
        gravity: 0.5, // 默认值：1，粒子下落的速度。1 是全重力，0.5 是半重力，0 表示无重力；大于 1 表示加速下落，负值表示粒子会向上升起。
        origin: {
          x: 0.5,
          y: (e.clientY + 20) / e.view.innerHeight
        }
      })
    }
  }
  const handleKeyEnter = (e) => {
    if (e.key === 'Enter') {
      handleInput()
    }
  }
  return (
    <Paper
      sx={{ p: '2px 2px 0', display: 'flex', alignItems: 'center', width: '100%', margin: '0 auto' }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder='输入你想搜索的任何内容'
        value={searchVal}
        size='small'
        inputProps={{ 'aria-label': 'search everything you want' }}
        onChange={e => setSearchVal(e.target.value)}
        onKeyDown={handleKeyEnter}
      />
      <IconButton size='small' type='button' sx={{ p: '10px' }} aria-label='search' onClick={handleInput}>
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation='vertical' />
      <Link to='/search'>
        <IconButton size='small' color='primary' sx={{ p: '10px' }} aria-label='directions'>
          <DirectionsIcon />
        </IconButton>
      </Link>
    </Paper>
  );
}

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/intro'>
            快速了解前端知识体系
          </Link>
        </div>
        <div className='row'>
          <div className='col col--8 col--offset-2'>
            <div className='margin-top--lg'>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomCover}>
        <svg preserveAspectRatio='none' width='1440' height='74' viewBox='0 0 1440 74' className={styles.waveSvg}>
          <path d='M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z'></path>
        </svg>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`欢迎来到${siteConfig.title}`}
      description='分享硬核的前端编程知识。'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageCodeBlock />
      </main>
    </Layout>
  );
}
