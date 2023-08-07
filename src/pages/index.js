import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageCodeBlock from '@site/src/components/HomepageCodeBlock';
import Search from "@site/src/theme/SearchBar";

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className='container'>
        <h1 className='hero__title'>{siteConfig.title}</h1>
        <p className='hero__subtitle'>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className='button button--secondary button--md'
            to='/docs/intro'>
            快速了解前端知识体系
          </Link>
        </div>
        <div className='margin-top--lg'>
          <Search show={true} />
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
