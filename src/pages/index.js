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
import Image from '@theme/IdealImage';

function SearchBar () {
  const [searchVal, setSearchVal] = useState('')
  const [shake, setShake] = useState(false)
  const history = useHistory()

  const handleInput = (e) => {
    if (searchVal) {
      history.push(`/search?value=${searchVal}`)
    } else {
      setShake(true);
      setTimeout(() => {
        setShake(false)
      }, 800)
    }
  }
  const handleKeyEnter = (e) => {
    if (e.key === 'Enter') {
      handleInput()
    }
  }
  return (
    <Paper
      sx={{ p: '2px 2px 0', display: 'flex', borderRadius: '999999px', alignItems: 'center', width: '100%', margin: '0 auto' }}
    >
      <InputBase
        sx={{ ml: 2, flex: 1 }}
        className={shake ? styles.searchInputShake : ''}
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
        <p className='hero__subtitle margin-bottom--lg'>分享硬核且有趣的前端编程知识</p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--lg'
            to='/docs/intro'>
            💡 快速了解前端知识体系
          </Link>
        </div>
        <div className='row'>
          <div className='col col--8 col--offset-2'>
            <div className='margin-top--xl'>
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

function ProjectList() {
  const PrjLst = [
    {
      title: '图片套壳美化',
      intro: '选择指定模型，帮你生成多种场景和样式经过美化的图片',
      image: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1722655177263-9d318181-8d2a-43f4-93b5-898319d77342.png',
      link: '/screenshot'
    },
    {
      title: '封面图生成',
      intro: '输入文章的标题和作者名，选择图标即可生成一张封面图，支持多种布局样式',
      image: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1722654438768-6af49cc0-1554-4df9-8799-f5c5210b262c.png',
      link: '/coverview'
    },
    {
      title: '文字卡片生成',
      intro: '你只需要输入一段文字，我们帮你生成不同样式的文字卡片',
      image: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1722653945177-9aa19586-01da-44de-9030-8f6af6b4e5b8.png',
      link: '/memocard'
    },
    {
      title: '代码图片生成',
      intro: '让代码以图片的方式展示和传播，支持多种背景和主题设置',
      image: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1722505333884-1d51f616-898e-4a1b-adbf-697863d9a904.png',
      link: '/codeimage'
    }
  ]
  return (
    <div className='container'>
      <div className='row margin-bottom--lg'>
        {PrjLst.map((el, index) => (
          <div className='col col--6 margin-top--lg' key={index}>
            <div className='card'>
              <div className='card__header'>
                <h3>{el.title}</h3>
              </div>
              <div className='card__body'>
                <p>{el.intro}</p>
                <Link to={el.link}>
                  <Image img={el.image} />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
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
        <ProjectList />
      </main>
    </Layout>
  );
}
