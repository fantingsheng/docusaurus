import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { useState, useRef } from 'react';
import styles from './style.module.scss';
import { Grid, FormControlLabel, Switch, ToggleButtonGroup, ToggleButton, Box, Typography, Slider } from '@mui/material';
import CodeBlock from '@theme/CodeBlock';
import ColorPicker from '@site/src/components/ColorPicker';
import clsx from 'clsx';

function ConfigForm({ config, handleConfigChange }) {

  const colorOptions = [
    {
      name: "常见",
      colors: ['#cbd5e1', '#ff924c', '#a0c4ff', '#ff595e', '#3fc95d', '#409EFF', '#909399', '#212529']
    },
    {
      name: "iPhone 16",
      colors: ['#ff924c', '#a0c4ff', '#ff595e', '#3fc95d', '#409EFF', '#909399', '#212529']
    }
  ];

  const ColorLst = ({ colors }) => {
    return (
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '10px' }}>
        {colors.map((item, id) => (
          <div
            className={clsx(styles.colorBox, config.color === item ? styles.on : '')}
            style={{ backgroundColor: item }}
            onClick={() => handleConfigChange(item, 'color')}
            key={id}
          />
        ))}
      </Box>
    )
  }

  return (
    <>
      <ToggleButtonGroup
        value={config.type}
        exclusive
        onChange={(e, val) => handleConfigChange(val, 'type')}
        aria-label="网格类型"
        size="small"
        fullWidth
      >
        <ToggleButton value="paper" aria-label="纸张">
          纸张
        </ToggleButton>
        <ToggleButton value="phone" aria-label="手机">
          手机
        </ToggleButton>
        <ToggleButton value="watch" aria-label="手表">
          手表
        </ToggleButton>
        <ToggleButton value="laptop" aria-label="笔记本">
          笔记本
        </ToggleButton>
      </ToggleButtonGroup>
      <Box className={styles.setItem}>
        <Typography variant="h5">颜色</Typography>
        <Box sx={{ display: 'flex', gap: '15px', flexDirection: 'column' }}>
          {
            colorOptions.map((el, index) => {
              return (
                <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                  <Typography variant="body1" sx={{ fontSize: '12px' }}>{el.name}</Typography>
                  <ColorLst colors={el.colors} />
                </Box>
              )
            })
          }
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px', marginTop: '25px' }}>
          <ColorPicker
            defaultColor={config.color}
            onChange={(color) => handleConfigChange(color, 'color')}
          />
        </Box>
      </Box>
    </>
  )
}

export function CssGrid({ normal }) {
  const [config, setConfig] = useState({
    color: '#cbd5e1',
    type: 'paper',
    size: 20,
  });

  const handleConfigChange = (val, key) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <Box sx={{ padding: '40px 0' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box className={styles.card} sx={{ padding: '20px' }}>
            <div className={styles.preview}>
              {config.type === 'paper' && <div className={clsx(styles.object, styles.paper)} style={{ '--obj-color': config.color }} />}
              {config.type === 'phone' && <div className={clsx(styles.object, styles.phone)} style={{ '--obj-color': config.color }}>
                <div className={styles.leftBtn1}></div>
                <div className={styles.leftBtn2}></div>
                <div className={styles.leftBtn3}></div>
                <div className={styles.rightBtn1}></div>
                <div className={styles.inner}></div>
              </div>}
              {config.type === 'watch' && <div className={clsx(styles.object, styles.watch)} style={{ '--obj-color': config.color }}>
                <div className={styles.topBand}></div>
                <div className={styles.main}>
                  <div className={styles.rightBtn1} />
                  <div className={styles.rightBtn2} />
                  <div className={styles.inner} />
                </div>
                <div className={styles.bottomBand}></div>
              </div>}
              {config.type === 'laptop' && <div className={clsx(styles.object, styles.laptop)} style={{ '--obj-color': config.color }}>
                <div className={styles.screen} />
                <div className={styles.keyboard}>
                  <div className={styles.block}></div>
                </div>
              </div>}
            </div>
          </Box>
        </Grid>
        {/* 配置 */}
        <Grid item xs={12} md={4}>
          <Box className={styles.card} sx={{ padding: '20px 20px 30px' }}>
            <ConfigForm config={config} handleConfigChange={handleConfigChange} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default function Main() {
  return (
    <Layout title='颜色实验室' description='探索物体颜色的可能性'>
      <Head>
        <meta name="keywords" content='颜色,配色,纯色,渐变色,动态演示,颜色实验室' />
      </Head>
      <div className={styles.page}>
        <div className="container">
          <CssGrid />
        </div>
      </div>
    </Layout>
  )
}
