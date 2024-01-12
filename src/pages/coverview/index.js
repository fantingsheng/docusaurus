import React from 'react';
import { useState, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { Grid, Select, Button, MenuItem, TextField, Box, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
// import Image from '@mui/icons-material/Image';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { styled } from '@mui/material/styles';
import CoverImage from './CoverImage';
import { ColorPicker } from 'material-ui-color';
import styles from './style.module.scss';
import clsx from 'clsx';
import html2canvas from 'html2canvas';
import { devicons, selectDevicon } from './devicon';

import BasicTheme from './themeSkeleton/BasicTheme';
import BackgroundTheme from './themeSkeleton/BackgroundTheme';

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  border: '1px solid',
  backgroundColor: '#0063cc',
  borderColor: '#0063cc',
  '&:hover': {
    backgroundColor: '#0069d9',
    borderColor: '#0062cc',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
    borderColor: '#005cbf',
  },
  '&:focus': {
    boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
  },
});

export default function () {
  const coverRef = useRef();
  const [config, setConfig] = useState({
    font: 'serif',
    bgColor: '#949ee5',
    icon: 'react',
    ratio: 1,
    title: '欢迎来到太空编程站点',
    author: '编程范儿',
    theme: 'basic',
    bgImg: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1704985651753-e2a2eb6d-71c6-4293-8d8c-49203c7410bb.jpeg'
  });
  const fontOptions = [
    { label: 'serif', value: 'serif' },
    { label: 'sans', value: 'sans' },
    { label: 'mono', value: 'mono' },
    { label: 'Inter', value: 'inter' },
    { label: 'Poppins', value: 'poppins' },
    { label: 'Anek', value: 'anek' }
  ]
  const handleConfigChange = (val, key) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  };
  const onDownload = () => {
    if (!coverRef.current) return;
    html2canvas(coverRef.current, {
      useCORS: true,
      scale: 2,
      backgroundColor: 'transparent'
    }).then((canvas) => {
      let newImg = new Image()
      const date = new Date()
      newImg.src = canvas.toDataURL('image/png')
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = newImg.src;
      a.download = `spacexcode-cover-${date.getMinutes()}${date.getSeconds()}.png`;
      a.rel = "noopener noreferrer";
      document.body.append(a);
      a.click();
      setTimeout(() => {
          a.remove();
      }, 1000);
    })
  };
  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });
  return (
    <Layout title='制作封面图' description='封面图神器，根据配置快速生成一张漂亮的文章封面图'>
      <Head>
        <meta name="keywords" content='封面图' />
      </Head>
      <div style={{  }}>
        <div className="container">
          <Box sx={{ padding: '40px' }}>
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Box>
                  {/* 生成图显示 */}
                  <div ref={coverRef} className={styles.preview}>
                    <CoverImage config={config} />
                  </div>
                </Box>
                <Box sx={{ boxShadow: '2px 2px 50px -20px #00000080', padding: '10px 20px 40px',
                  marginTop: '32px', borderRadius: '12px' }}>
                  {/* 内容设置 */}
                  <Box className={styles.setItem}>
                    <Typography variant="h5">标题</Typography>
                    <TextField
                      value={config.title}
                      onChange={e => handleConfigChange(e.target.value, 'title')}
                      placeholder='标题'
                      size='small'
                      multiline
                      rows={3}
                      fullWidth
                    />
                  </Box>
                  <Box className={styles.setItem}>
                    <Typography variant="h5">作者</Typography>
                    <TextField
                      value={config.author}
                      onChange={e => handleConfigChange(e.target.value, 'author')}
                      placeholder='作者'
                      size='small'
                      fullWidth
                    />
                  </Box>
                  <Box className={styles.setItem}>
                    <Typography variant="h5">图标</Typography>
                    <Box sx={{ display: 'flex', gap: '10px' }}>
                      <Select
                        value={config.icon}
                        onChange={val => handleConfigChange(val.target.value, 'icon')}
                        label=''
                        size='small'
                        fullWidth
                      >
                        {devicons.map(el => (
                          <MenuItem value={el.value} key={el.value}>
                            <div className={styles.selectIconRow}><span>{el.label}</span>{selectDevicon(el.value)}</div></MenuItem>
                        ))}
                      </Select>
                      <Button component="label" variant="contained" sx={{ width: '120px' }} startIcon={<AddPhotoAlternateIcon />}>
                        上传<VisuallyHiddenInput type="file" onChange={(e) => handleConfigChange(URL.createObjectURL(e.target.files[0]), 'customIcon')} />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                {/* 配置 */}
                <Box sx={{ boxShadow: '2px 2px 50px -20px #00000080', padding: '10px 20px 40px',
                borderRadius: '12px' }}>
                  <Box className={styles.setItem}>
                    <Typography variant="h5">主题</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {/* 主题列表 */}
                      <div className={clsx(styles.themeItem, config.theme === 'basic' ? styles.on : '')}
                        onClick={() => handleConfigChange('basic', 'theme')}><BasicTheme /></div>
                      <div className={clsx(styles.themeItem, config.theme === 'background' ? styles.on : '')}
                        onClick={() => handleConfigChange('background', 'theme')}><BackgroundTheme /></div>
                    </Box>
                  </Box>
                  <Box className={styles.setItem}>
                    <Typography variant="h5">字体</Typography>
                    <Select
                      value={config.font}
                      onChange={val => handleConfigChange(val.target.value, 'font')}
                      label=""
                      size='small'
                      fullWidth
                    >
                      {fontOptions.map(el => (
                        <MenuItem value={el.value} key={el.value}>{el.label}</MenuItem>
                      ))}
                    </Select>
                  </Box>
                  <Box className={styles.setItem}>
                    <Typography variant="h5">背景色</Typography>
                    <Box sx={{ display: 'flex' }}>
                      <div className={styles.bgGradient} style={{ backgroundImage: 'linear-gradient(310deg,rgb(214,233,255),rgb(214,229,255),rgb(209,214,255),rgb(221,209,255),rgb(243,209,255),rgb(255,204,245),rgb(255,204,223),rgb(255,200,199),rgb(255,216,199),rgb(255,221,199))'}}></div>
                      <div className={styles.bgGradient} style={{ backgroundImage: 'linear-gradient(160deg,rgb(204,251,252),rgb(197,234,254),rgb(189,211,255))'}}></div>
                      <div className={styles.bgGradient} style={{ backgroundImage: 'linear-gradient(150deg,rgb(255,242,158),rgb(255,239,153),rgb(255,231,140),rgb(255,217,121),rgb(255,197,98),rgb(255,171,75),rgb(255,143,52),rgb(255,115,33),rgb(255,95,20),rgb(255,87,15))'}}></div>
                      <div className={styles.bgGradient} style={{ backgroundImage: 'linear-gradient(345deg,rgb(211,89,255),rgb(228,99,255),rgb(255,123,247),rgb(255,154,218),rgb(255,185,208),rgb(255,209,214),rgb(255,219,219))'}}></div>
                      <div className={styles.bgGradient} style={{ backgroundImage: 'linear-gradient(150deg,rgb(0,224,245),rgb(31,158,255),rgb(51,85,255))'}}></div>
                      <div className={styles.bgGradient} style={{ backgroundImage: 'linear-gradient(330deg,rgb(255,25,125),rgb(45,13,255),rgb(0,255,179))'}}></div>
                      <div className={styles.bgGradient} style={{ backgroundImage: 'linear-gradient(150deg,rgb(0,176,158),rgb(19,77,93),rgb(16,23,31))'}}></div>
                      <div className={styles.bgGradient} style={{ backgroundImage: 'linear-gradient(150deg,rgb(95,108,138),rgb(48,59,94),rgb(14,18,38))'}}></div>
                    </Box>
                    <ColorPicker
                      value={config.bgColor}
                      onChange={val => handleConfigChange(`#${val.hex}`, 'bgColor')} 
                      fullWidth
                    />
                  </Box>
                  <Box className={styles.setItem}>
                    <Typography variant="h5">背景图</Typography>
                    <Button component="label" variant="contained" sx={{ width: '120px' }} startIcon={<AddPhotoAlternateIcon />}>
                      上传<VisuallyHiddenInput type="file" onChange={(e) => handleConfigChange(URL.createObjectURL(e.target.files[0]), 'bgImg')} />
                    </Button>
                  </Box>
                  <Box className={styles.setItem}>
                    <Typography variant="h5">长宽比</Typography>
                    <ToggleButtonGroup
                      value={config.ratio}
                      exclusive
                      onChange={val => handleConfigChange(val, 'ratio')}
                      aria-label='Ratio'
                      size='small'
                    >
                      <ToggleButton sx={{ padding: '7px 12px' }} value={1}>1:1</ToggleButton>
                      <ToggleButton sx={{ padding: '7px 12px' }} value={1/2}>1:2</ToggleButton>
                    </ToggleButtonGroup>
                  </Box>
                  <Box className={styles.setItem}>
                    <Button variant="contained" onClick={onDownload} startIcon={<SaveAltIcon />} disableElevation fullWidth>导出图片</Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </div>
      </div>
    </Layout>
  )
}
