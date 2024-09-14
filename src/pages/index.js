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
            <div className={styles.searchDiv}>
              <SearchBar />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.bottomCover}>
        {/* <svg preserveAspectRatio='none' width='1440' height='74' viewBox='0 0 1440 74' className={styles.waveSvg}>
          <path d='M456.464 0.0433865C277.158 -1.70575 0 50.0141 0 50.0141V74H1440V50.0141C1440 50.0141 1320.4 31.1925 1243.09 27.0276C1099.33 19.2816 1019.08 53.1981 875.138 50.0141C710.527 46.3727 621.108 1.64949 456.464 0.0433865Z'></path>
        </svg> */}
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className={styles.waveSvg}>
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
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
      description='分享硬核且有趣的前端编程知识，带你快速进入计算机Web的程序世界。'>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageCodeBlock />
        <ProjectList />
      </main>
    </Layout>
  );
}
