import React from 'react';
import { useState } from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import CodeBlock from '@theme/CodeBlock';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import Banner from './banner';
import styles from './index.module.css';

function Form () {
  const baseUrl = 'https://visitor.spacexcode.com';
  const [ srcValue, setSrcValue ] = useState(baseUrl + '/preview');
  const [idError, setIdError] = useState(false);
  const [params, setParams] = useState({
    id: '',
    label: '',
    labelColor: '',
    color: '',
    type: '',
    style: ''
  })
  const onChangeHandle = (val, key) => {
    setParams((prev) => ({ ...prev, [key]: val }))
  }
  const onSubmit = () => {
    if (!params.id) {
      setIdError(true);
      return;
    }
    setIdError(false);
    const parstr = Object.keys(params).map(el => `${el}=${params[el]}`).join('&');
    setSrcValue(baseUrl + '/?' + parstr);
  }
  return (
    <div className='container'>
      <div className='col col--6 col--offset-3'>
        <form className='margin-vert--lg'>
          <div className='row'>
            <div className='col col--6 margin-vert--sm'>
              <TextField 
                label='id'
                size='small'
                value={params.id}
                error={idError}
                onChange={ e => onChangeHandle(e.target.value, 'id')}
                required
                fullWidth />
            </div>
            <div className='col col--6 margin-vert--sm'>
              <TextField
                label='label'
                size='small'
                value={params.label}
                onChange={ e => onChangeHandle(e.target.value, 'label')}
                fullWidth />
            </div>
          </div>
          <div className='row'>
            <div className='col col--6 margin-vert--sm'>
              <TextField
                label='labelColor'
                size='small'
                value={params.labelColor}
                onChange={ e => onChangeHandle(e.target.value, 'labelColor')}
                fullWidth />
            </div>
            <div className='col col--6 margin-vert--sm'>
              <TextField
                label='color'
                size='small'
                value={params.color}
                onChange={ e => onChangeHandle(e.target.value, 'color')}
                fullWidth />
            </div>
          </div>
          <div className='row'>
            <div className='col col--6 margin-vert--sm'>
              <FormControl size='small' fullWidth>
                <InputLabel>type</InputLabel>
                <Select
                  value={params.type}
                  label='type'
                  onChange={ e => onChangeHandle(e.target.value, 'type')}
                >
                  <MenuItem value='pv'>pv</MenuItem>
                  <MenuItem value='uv'>uv</MenuItem>
                </Select>
              </FormControl>
            </div>
            <div className='col col--6 margin-vert--sm'>
              <FormControl size='small' fullWidth>
                <InputLabel>style</InputLabel>
                <Select
                  value={params.style}
                  label='style'
                  onChange={ e => onChangeHandle(e.target.value, 'style')}
                >
                  <MenuItem value='plastic'>plastic</MenuItem>
                  <MenuItem value='flat'>flat</MenuItem>
                  <MenuItem value='flat-square'>flat-square</MenuItem>
                  <MenuItem value='for-the-badge'>for-the-badge</MenuItem>
                  <MenuItem value='social'>social</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
          <div className='row'>
            <div className='col col--4 col--offset-4 margin-vert--md'>
              <Button variant='contained' onClick={onSubmit} disableElevation fullWidth>生成</Button>
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
          <li><i>id: </i>作为统计页面的唯一标识</li>
          <li><i>label: </i>显示在左侧的说明性文字，不填默认为 visitors</li>
          <li><i>labelColor: </i>左侧说明性文字的背景颜色</li>
          <li><i>color: </i>右侧统计数字的背景颜色</li>
          <li><i>type: </i>统计值类型，目前有两种：pv, uv</li>
          <li><i>style: </i>统计标签的样式有五种，分别为：plastic, flat, flat-square, for-the-badge, social</li>
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
