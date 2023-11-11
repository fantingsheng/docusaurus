import * as React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './style.module.scss';
import { Box, Typography, Slider, Switch, Button } from '@mui/material';

export function Main () {
  const cssObj = {
    border: '1px solid #ffffff2e',
    backdropFilter: 'blur(10px)',
    background: 'hsla(0, 0%, 100%, 0.15)',
    boxShadow: '0 6px 15px 0 #8e8e8e30'
  }
  return (
    <>
      <div class={styles.circleBig}></div>
      <div class={styles.glassBox} style={cssObj}></div>
      <div class={styles.circleSmall}></div>
    </>
  );
}

export function Tool () {
  const handleSliderChange = () => {}
  return (
    <>
      <Box sx={{ width: '280px' }}>
        <Box sx={{ marginBottom: '20px' }}>
          <Typography sx={{ color: 'lightgrey' }} gutterBottom>
            盒子长度
          </Typography>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="width"
          />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <Typography sx={{ color: 'lightgrey' }} gutterBottom>
            圆角半径
          </Typography>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="width"
          />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <Typography sx={{ color: 'lightgrey' }} gutterBottom>
            背景模糊度
          </Typography>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="width"
          />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <Typography sx={{ color: 'lightgrey' }} gutterBottom>
            透明度
          </Typography>
          <Slider
            value={typeof value === 'number' ? value : 0}
            onChange={handleSliderChange}
            aria-labelledby="width"
          />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <Typography sx={{ color: 'lightgrey' }} gutterBottom>
            显示边框
          </Typography>
          <Switch inputProps={{ ariaLabel: 'Switch demo' }} />
        </Box>
        <Box sx={{ '& > button': { m: 1 } }}>
          <Button variant="contained">查看代码</Button>
          <Button variant="contained">导出图片</Button>
        </Box>
      </Box>
    </>
  );
}

export default function () {
  return (
    <Layout title='在线生成 CSS 毛玻璃效果' description='此工具可在线制作玻璃形态，通过实时预览背景模糊、不透明度、轮廓等等就可以制作玻璃样式的盒子'>
    <Head>
      <meta name="keywords" content='毛玻璃, 透明度, 模糊' />
    </Head>
      <div className={styles.main}>
        <div className={styles.left}>
          <Tool />
        </div>
        <div className={styles.right}>
          <Main />
        </div>
      </div>
    </Layout>
  )
}