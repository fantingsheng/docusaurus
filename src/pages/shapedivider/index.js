import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import { TextField, FormControl, InputLabel, Select, MenuItem, Button, Slider, Card, CardContent } from '@mui/material';
import styles from './style.module.css';


export default function () {

  function Banner () {
    return (
      <div className={clsx('hero', styles.bannerbg)} style={{ height: '25rem' }}>
        <div className="container text--center">
          <h2 className="hero__title">分隔线</h2>
          <p className="hero__subtitle">生动的波纹分隔线</p>
          <div>
            由 SVG 覆盖在页面上形成
          </div>
        </div>
      </div>
    )
  }

  function Form () {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col col--8 col--offset-2'>
            <Card variant="outlined" className={styles.formWrap}>
              <CardContent>
                <div className='row'>
                  <div className='col col--4'>
                    <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" fullWidth/>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <Layout>
      <Banner />
      <Form />
    </Layout>
  )
}
