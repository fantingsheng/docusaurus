import React from 'react';
import { useState } from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import Banner from './banner';
import styles from './index.module.css';

function Form () {
  const baseUrl = 'https://visitor.spacexcode.com'
  const [ srcValue, setSrcValue ] = useState(baseUrl + '/preview')
  const [params, setParams] = useState({
    id: '',
    label: '',
    labelColor: '',
    color: '',
    type: 'pv',
    style: 'plat'
  })
  const onChangeHandle = (val, key) => {
    setParams((prev) => ({ ...prev, [key]: val }))
  }
  const onSubmit = () => {
    if (!params.id) {
      alert('id mustn\'t empty')
      return;
    }
    const parstr = Object.keys(params).map(el => `${el}=${params[el]}`).join('&');
    setSrcValue(baseUrl + '/?' + parstr);
  }
  return (
    <div className='container'>
      <div className='col col--6 col--offset-3'>
        <form className='margin-vert--lg'>
          <div className='row'>
            <div className='col col--6'>
              <input className={styles.input} placeholder='id' value={params.id} onChange={ e => onChangeHandle(e.target.value, 'id')} />
            </div>
            <div className='col col--6'>
              <input className={styles.input} placeholder='label' value={params.label} onChange={ e => onChangeHandle(e.target.value, 'label')} />
            </div>
          </div>
          <div className='row margin-vert--md'>
            <div className='col col--6'>
              <input className={styles.input} placeholder='labelColor' value={params.labelColor} onChange={ e => onChangeHandle(e.target.value, 'labelColor') } />
            </div>
            <div className='col col--6'>
              <input className={styles.input} placeholder='color' value={params.color} onChange={ e => onChangeHandle(e.target.value, 'color')} />
            </div>
          </div>
          <div className='row margin-vert--md'>
            <div className='col col--6'>
              <select className={styles.select} placeholder='' value={params.type} onChange={ e => onChangeHandle(e.target.value, 'type')}>
                <option value='pv'>pv</option>
                <option value='uv'>uv</option>
              </select>
            </div>
            <div className='col col--6'>
              <select className={styles.select} placeholder='' value={params.style} onChange={ e => onChangeHandle(e.target.value, 'style')}>
                <option value='plastic'>plastic</option>
                <option value='flat'>flat</option>
                <option value='flat-square'>flat-square</option>
                <option value='for-the-badge'>for-the-badge</option>
                <option value='social'>social</option>
              </select>
            </div>
          </div>
          <div className='row margin-vert--md'>
            <div className='col col--4 col--offset-4'>
              <button className={styles.button} type='button' onClick={onSubmit}>生成</button>
            </div>
          </div>
        </form>
        <div className='margin-bottom--md text--center'>
          <img className={styles.img} src={srcValue} alt='' />
        </div>
        <div className='margin-bottom--md text--center'>{srcValue}</div>
      </div>
      <div className='col col--8 col--offset-2'>
        <h3 className='text--center margin-top--xl'>使用方式</h3>
        <Tabs>
          <TabItem value='markdown' label='MarkDown' default>
          <CodeBlock language="jsx">
            {`![visitors](${srcValue})`}
          </CodeBlock>
          </TabItem>
          <TabItem value='img' label='IMG'>
          <CodeBlock language="jsx">
            {`<img src="${srcValue}" alt="visitors" />`}
          </CodeBlock>
          </TabItem>
        </Tabs>
      </div>
    </div>
  )
}

function Introduction() {
  return (
    <div className='container'>
      <div className='col col--8 col--offset-2'>
        <h4 className='margin-top--sm'>参数介绍：</h4>
        <ul className={styles.introList}>
          <li><strong className='margin-right--sm'>id: </strong>作为统计页面的唯一标识</li>
          <li><strong className='margin-right--sm'>label: </strong>显示在左侧的说明性文字，不填默认为 visitors</li>
          <li><strong className='margin-right--sm'>labelColor: </strong>左侧说明性文字的背景颜色</li>
          <li><strong className='margin-right--sm'>color: </strong>右侧统计数字的背景颜色</li>
          <li><strong className='margin-right--sm'>type: </strong>统计值类型，目前有两种：pv, uv</li>
          <li><strong className='margin-right--sm'>style: </strong>统计标签的样式有五种，分别为：plastic, flat, flat-square, for-the-badge, social</li>
        </ul>
      </div>
    </div>
  )
}

export default function () {
  return (
    <Layout>
      <Banner />
      <Form />
      <Introduction />
    </Layout>
  )
}
