import React from 'react';
import { useState } from 'react';
import Layout from '@theme/Layout';
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
    </div>
  )
}

export default function () {
  return (
    <Layout>
      <Banner />
      <Form />
    </Layout>
  )
}
