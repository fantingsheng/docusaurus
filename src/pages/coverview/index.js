import React from 'react';
import { useState, useEffect, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { Grid, Select, Button, MenuItem, TextField, Box, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import Image from '@mui/icons-material/Image';
import { styled } from '@mui/material/styles';
import CoverImage from './CoverImage';
import { ColorPicker } from 'material-ui-color';
import styles from './style.module.scss';
import clsx from 'clsx';
import html2canvas from 'html2canvas'
import { devicons } from './devicon';
import BasicTheme from "./themeSkeleton/BasicTheme";

export default function () {
  const coverRef = useRef();
  const [config, setConfig] = useState({
    font: '',
    bgColor: '#949ee5',
    icon: 'react',
    ratio: '1/2',
    title: '欢迎来到太空编程站点',
    author: '编程范儿',
    theme: 'basic'
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
              <Box>
                {/* 内容设置 */}
                <Box className={styles.setItem}>
                  <Typography variant="h5">文章标题</Typography>
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
                      label=""
                      size='small'
                      fullWidth
                    >
                      {devicons.map(el => (
                        <MenuItem value={el.value} key={el.value}>{el.label}</MenuItem>
                      ))}
                    </Select>
                    <Button component="label" variant="contained" sx={{ width: '120px' }} startIcon={<Image />}>
                      上传<VisuallyHiddenInput type="file" onChange={(e) => handleConfigChange(URL.createObjectURL(e.target.files[0]), 'customIcon')} />
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              {/* 配置 */}
              <Box className={styles.setItem} sx={{ marginTop: '15px' }}>
                <Typography variant="h5">主题</Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                  {/* 主题列表 */}
                  <div className={clsx(styles.themeItem, config.theme === 'basic' ? styles.on : '')}
                    onClick={() => handleConfigChange('basic', 'theme')}><BasicTheme /></div>
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
              <Box className={styles.setItem} sx={{ marginTop: '15px' }}>
                <Typography variant="h5">背景色</Typography>
                <ColorPicker
                  value={config.bgColor}
                  onChange={val => handleConfigChange(`#${val.hex}`, 'bgColor')} 
                  fullWidth
                />
              </Box>
              <Box className={styles.setItem} sx={{ marginTop: '15px' }}>
                <Typography variant="h5">长宽比</Typography>
                <ToggleButtonGroup
                  value={config.ratio}
                  exclusive
                  onChange={val => handleConfigChange(val, 'ratio')}
                  aria-label='Ratio'
                  size='small'
                >
                  <ToggleButton sx={{  }} value={1}>1:1</ToggleButton>
                  <ToggleButton sx={{  }} value={1/2}>1:2</ToggleButton>
                </ToggleButtonGroup>
              </Box>
              <Box className={styles.setItem} sx={{ marginTop: '15px' }}>
                <Button variant="contained" onClick={onDownload} disableElevation fullWidth>导出图片</Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </div>
    </Layout>
  )
}
