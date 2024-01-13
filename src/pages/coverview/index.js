import React from 'react';
import { useState, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { Grid, Select, Button, ButtonGroup, MenuItem, MenuList, Popper, TextField, Paper, Box, Grow, Typography, ClickAwayListener, ToggleButtonGroup, ToggleButton } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import { styled } from '@mui/material/styles';
import CoverImage from './CoverImage';
import RandomTheme from './RandomTheme';
import { ColorPicker } from 'material-ui-color';
import styles from './style.module.scss';
import clsx from 'clsx';
import html2canvas from 'html2canvas';
import { devicons, selectDevicon } from './DevIcons';

import BasicTheme from './themeSkeleton/BasicTheme';
import BackgroundTheme from './themeSkeleton/BackgroundTheme';
import StylishTheme from './themeSkeleton/StylishTheme';
import OutlineTheme from './themeSkeleton/OutlineTheme';
import ModernTheme from './themeSkeleton/ModernTheme';
import PreviewTheme from './themeSkeleton/PreviewTheme';
import MobileTheme from './themeSkeleton/MobileTheme';

export default function () {
  const coverRef = useRef();
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [config, setConfig] = useState({
    font: 'serif',
    bgColor: '#949ee5',
    gradientBgColor: '',
    icon: 'react',
    ratio: 1/2,
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
  ];
  const bgColorOptions = [
    'linear-gradient(310deg,rgb(214,233,255),rgb(214,229,255),rgb(209,214,255),rgb(221,209,255),rgb(243,209,255),rgb(255,204,245),rgb(255,204,223),rgb(255,200,199),rgb(255,216,199),rgb(255,221,199))',
    'linear-gradient(160deg,rgb(204,251,252),rgb(197,234,254),rgb(189,211,255))',
    'linear-gradient(150deg,rgb(255,242,158),rgb(255,239,153),rgb(255,231,140),rgb(255,217,121),rgb(255,197,98),rgb(255,171,75),rgb(255,143,52),rgb(255,115,33),rgb(255,95,20),rgb(255,87,15))',
    'linear-gradient(345deg,rgb(211,89,255),rgb(228,99,255),rgb(255,123,247),rgb(255,154,218),rgb(255,185,208),rgb(255,209,214),rgb(255,219,219))',
    'linear-gradient(150deg,rgb(0,224,245),rgb(31,158,255),rgb(51,85,255))',
    'linear-gradient(330deg,rgb(255,25,125),rgb(45,13,255),rgb(0,255,179))',
    'linear-gradient(150deg,rgb(0,176,158),rgb(19,77,93),rgb(16,23,31))',
    'linear-gradient(150deg,rgb(95,108,138),rgb(48,59,94),rgb(14,18,38))'
  ]
  const handleConfigChange = (val, key) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  };
  const downloadImage = (scale, format) => {
    if (!coverRef.current) return;
    html2canvas(coverRef.current, {
      useCORS: true,
      scale: scale,
      backgroundColor: 'transparent'
    }).then((canvas) => {
      let newImg = new Image()
      const date = new Date()
      newImg.src = canvas.toDataURL('image/' + format) // 'image/png'
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = newImg.src;
      a.download = `spacexcode-cover-${date.getMinutes()}${date.getSeconds()}.${format}`;
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
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleMenuItemClick = (event, scale, format) => {
    downloadImage(scale, format);
    setOpen(false);
  };
  return (
    <Layout title='制作封面图' description='封面图神器，根据配置快速生成一张漂亮的文章封面图'>
      <Head>
        <meta name="keywords" content='封面图' />
      </Head>
      <div style={{ backgroundColor: 'rgba(229, 231, 235, 0.3)' }}>
        <div className="container">
          <Box sx={{ padding: '40px 0' }}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={8}>
                <Box className={styles.card} sx={{ overflow: 'hidden', padding: '14px' }}>
                  {/* 生成图显示 */}
                  <div ref={coverRef} className={styles.preview}>
                    <CoverImage config={config} />
                  </div>
                </Box>
                <Box className={styles.card} sx={{ padding: '10px 20px 40px', marginTop: '24px' }}>
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
                      <Button component="label" size='small' variant="contained" sx={{ width: '120px' }} startIcon={<AddPhotoAlternateIcon />}>
                        上传<VisuallyHiddenInput type="file" onChange={(e) => handleConfigChange(URL.createObjectURL(e.target.files[0]), 'customIcon')} />
                      </Button>
                    </Box>
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                {/* 配置 */}
                <Box className={styles.card} sx={{ padding: '10px 20px 40px' }}>
                  <Box className={styles.setItem}>
                    <Typography variant="h5">主题</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {/* 主题列表 */}
                      <div className={clsx(styles.themeItem, config.theme === 'basic' ? styles.on : '')}
                        onClick={() => handleConfigChange('basic', 'theme')}><BasicTheme /></div>
                      <div className={clsx(styles.themeItem, config.theme === 'background' ? styles.on : '')}
                        onClick={() => handleConfigChange('background', 'theme')}><BackgroundTheme /></div>
                      <div className={clsx(styles.themeItem, config.theme === 'stylish' ? styles.on : '')}
                        onClick={() => handleConfigChange('stylish', 'theme')}><StylishTheme /></div>
                      <div className={clsx(styles.themeItem, config.theme === 'outline' ? styles.on : '')}
                        onClick={() => handleConfigChange('outline', 'theme')}><OutlineTheme /></div>
                      <div className={clsx(styles.themeItem, config.theme === 'modern' ? styles.on : '')}
                        onClick={() => handleConfigChange('modern', 'theme')}><ModernTheme /></div>
                      <div className={clsx(styles.themeItem, config.theme === 'preview' ? styles.on : '')}
                        onClick={() => handleConfigChange('preview', 'theme')}><PreviewTheme /></div>
                      <div className={clsx(styles.themeItem, config.theme === 'mobile' ? styles.on : '')}
                        onClick={() => handleConfigChange('mobile', 'theme')}><MobileTheme /></div>
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
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                      {bgColorOptions.map((el, index) => (
                        <div className={clsx(styles.bgGradient, config.gradientBgColor === el ? styles.on : '')} style={{ backgroundImage: el }}
                          onClick={() => handleConfigChange(el, 'gradientBgColor')} key={index}></div>
                      ))}
                      <div className={clsx(styles.bgGradient, styles.clearColor)} onClick={() => handleConfigChange('', 'gradientBgColor')}>
                        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>清除背景色</title>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                      </div>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                      <ColorPicker
                        value={config.bgColor}
                        onChange={val => handleConfigChange(`#${val.hex}`, 'bgColor')} 
                        sx={{ width: '60px' }}
                      />
                      <RandomTheme onThemeChange={(theme, Pattern) => handleConfigChange(theme.bgColor, 'bgColor')} />
                    </Box>
                  </Box>
                  <Box className={styles.setItem}>
                    <Typography variant="h5">背景图</Typography>
                    <Button component="label" variant="contained" sx={{ width: '120px' }} startIcon={<AddPhotoAlternateIcon />}>
                      上传<VisuallyHiddenInput type="file" onChange={(e) => handleConfigChange(URL.createObjectURL(e.target.files[0]), 'bgImg')} />
                    </Button>
                  </Box>
                  <Box className={styles.setItem}>
                    <Typography variant="h5">长宽比<span style={{ fontSize: '0.8rem', color: '#fa383e' }}>（正在开发中）</span></Typography>
                    <ToggleButtonGroup
                      value={config.ratio}
                      exclusive
                      onChange={val => handleConfigChange(val, 'ratio')}
                      aria-label='Ratio'
                      size='small'
                      disabled
                    >
                      <ToggleButton sx={{ padding: '7px 12px' }} value={1/2}>1:2</ToggleButton>
                      <ToggleButton sx={{ padding: '7px 12px' }} value={3/4}>3:4</ToggleButton>
                      <ToggleButton sx={{ padding: '7px 12px' }} value={5/8}>5:8</ToggleButton>
                    </ToggleButtonGroup>
                  </Box>
                  <Box className={styles.setItem}>
                    <ButtonGroup variant="contained" ref={anchorRef} aria-label="split button" fullWidth>
                      <Button startIcon={<SaveAltIcon />} onClick={handleToggle} disableElevation>导出图片</Button>
                      <Button
                        aria-controls={open ? 'split-button-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}
                        aria-label="选择格式并导出图片"
                        aria-haspopup="menu"
                        onClick={handleToggle}
                        disableElevation
                        sx={{ width: 80 }}
                      >
                        <ArrowDropDownIcon />
                      </Button>
                    </ButtonGroup>
                    <Popper sx={{ zIndex: 1 }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                      {({ TransitionProps, placement }) => (
                        <Grow
                          {...TransitionProps}
                          style={{
                            transformOrigin:
                              placement === 'bottom' ? 'center top' : 'center bottom',
                          }}
                        >
                          <Paper>
                            <ClickAwayListener onClickAway={handleClose}>
                              <MenuList autoFocusItem>
                                <MenuItem onClick={(event) => handleMenuItemClick(event, 1, 'png')}>
                                  1X / PNG
                                </MenuItem>
                                <MenuItem onClick={(event) => handleMenuItemClick(event, 2, 'png')}>
                                  2X / PNG
                                </MenuItem>
                                <MenuItem onClick={(event) => handleMenuItemClick(event, 1, 'jpg')}>
                                  1X / JPG
                                </MenuItem>
                                <MenuItem onClick={(event) => handleMenuItemClick(event, 2, 'jpg')}>
                                  2X / JPG
                                </MenuItem>
                              </MenuList>
                            </ClickAwayListener>
                          </Paper>
                        </Grow>
                      )}
                    </Popper>
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
