import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Banner from './banner'
import Form from './form'

export default function () {
  return (
    <Layout title='优美的分隔线' description='为你的网页生成一条独特的弧线分隔线'>
       <Head>
        <meta name="keywords" content='分隔线, SVG, 弧线, 背景图' />
      </Head>
      <Banner />
      <div className='container'>
        <div className='row'>
          <div className='col col--10 col--offset-1'>
            <Form />
          </div>
        </div>
      </div>
    </Layout>
  )
}
