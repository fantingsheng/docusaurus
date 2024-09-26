import React from 'react';
import { useState, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import GiscusComponent from '@site/src/components/GiscusComponent';
import { Grid, Select, Button, ButtonGroup, MenuItem, MenuList, Popper, TextField, Paper, Box, Grow, Typography,
  ClickAwayListener, ToggleButtonGroup, ToggleButton, Slider } from '@mui/material';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CopyAll from '@mui/icons-material/CopyAll';
import GoogleAdsBlock from '@site/src/components/GoogleAdsBlock';
import { styled } from '@mui/material/styles';
import CoverImage from './CoverImage';
import RandomTheme from '../memocard/RandomTheme';
import ColorPicker from '@site/src/components/ColorPicker';
import styles from './style.module.scss';
import clsx from 'clsx';
import { toPng, toJpg, toBlob } from '@site/src/utils/image';
import { downloadByUrl } from '@site/src/utils';
import { devicons, selectDevicon } from './DevIcons';

import BasicTheme from './themeSkeleton/BasicTheme';
import BackgroundTheme from './themeSkeleton/BackgroundTheme';
import StylishTheme from './themeSkeleton/StylishTheme';
import OutlineTheme from './themeSkeleton/OutlineTheme';
import ModernTheme from './themeSkeleton/ModernTheme';
import PreviewTheme from './themeSkeleton/PreviewTheme';
import MobileTheme from './themeSkeleton/MobileTheme';
import PictureTheme from './themeSkeleton/PictureTheme';

import FrequentQuestion from './FaqList';
import MoreGradient from '../memocard/MoreGradient';

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

export function Main({ normal }) {
  const coverRef = useRef();
  const [loading, setLoading] = useState(false);
  
  const [config, setConfig] = useState({
    font: '',
    bgColor: '#949ee5',
    gradientBgColor: '',
    icon: 'react',
    ratio: 0.5,
    width: 810,
    borderRadius: 10,
    vertPad: 20,
    horizPad: 20,
    title: '欢迎来到太空编程站点',
    author: '编程范儿',
    theme: 'basic',
    bgImg: '/page/coverview-bg.png'
  });
 
  const handleConfigChange = (val, key) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  };
  const downloadImage = async (scale, format) => {
    if (!coverRef.current) return;
    setLoading(true);
    const dataUrl = format === "png" ? await toPng(coverRef.current, {
      pixelRatio: scale
    }) : await toJpg(coverRef.current, {
      pixelRatio: scale
    });
    const date = new Date()
    const scaleName = scale > 1 ? `@${scale}x` : '';
    const fileName = `spacexcode-coverview-${date.getMinutes()}${date.getSeconds()}${scaleName}.${format}`;
    downloadByUrl(dataUrl, fileName);
    setLoading(false);
  };

  const handleCopyImg = async (cb) => {
    if (!coverRef.current) return;
    setLoading(true);
    const blob = await toBlob(coverRef.current, {
      pixelRatio: 1
    })
    const data = [
      new ClipboardItem({
        [blob.type]: blob,
      })
    ];
    await navigator.clipboard.write(data)
      .then(
        () => {
          console.log("复制成功!");
          cb && cb();
        },
        (err) => {
          console.error(err);
        }
      ).catch((err) => {
        console.error(err);
      }).finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box sx={{ padding: '0 0 40px' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={ normal ? 8 : 12 }>
          <Box className={styles.card} sx={{ padding: '20px 10px', overflowX: 'auto' }}>
            {/* 生成图显示 */}
            <div className={styles.initBox}>
              <div ref={coverRef} className={styles.preview} style={{ width: config.width + 'px'}}>
                <CoverImage config={config} />
              </div>
              {
                loading ? <div className={styles.loader}>
                  <span></span>
                </div> : ''
              }
            </div>
          </Box>
          {
            normal ? 
            <Box className={styles.card} sx={{ padding: '10px 20px 40px', marginTop: '24px' }}>
              <ContentForm config={config} handleConfigChange={handleConfigChange} />
            </Box>
            : <></>
          }
        </Grid>
        {
          !normal ? 
          <Grid item xs={12} md={6}>
            <Box className={styles.card} sx={{ padding: '10px 20px 40px' }}>
              <ContentForm config={config} handleConfigChange={handleConfigChange} />
            </Box>
          </Grid>
          : <></>
        }
          {/* 配置 */}
        <Grid item xs={12} md={normal ? 4 : 6}>
          <Box className={styles.card} sx={{ padding: '10px 20px 40px' }}>
            <ConfigForm config={config} handleConfigChange={handleConfigChange} downloadImage={downloadImage} handleCopyImg={handleCopyImg} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export function ContentForm ({ config, handleConfigChange }) {
  return (
    <>
      {['background', 'stylish', 'basic', 'modern', 'outline', 'mobile', 'preview'].includes(config.theme) ?
        <Box className={styles.setItem}>
          <Typography variant="h5">标题</Typography>
          <TextField
            value={config.title}
            onChange={e => handleConfigChange(e.target.value, 'title')}
            placeholder='标题'
            size='small'
            className={styles.sizeInput}
            multiline
            rows={3}
            fullWidth
          />
        </Box> : ''
      }
      {['background', 'stylish', 'basic', 'modern', 'outline'].includes(config.theme) ?
        <>
          <Box className={styles.setItem}>
            <Typography variant="h5">作者</Typography>
            <TextField
              value={config.author}
              onChange={e => handleConfigChange(e.target.value, 'author')}
              placeholder='作者'
              className={styles.sizeInput}
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
                sx={{ '& > div': { paddingTop: '6px', paddingBottom: '6px' } }}
                size='small'
                className={styles.sizeInput}
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
        </>
        : ''
      }
    </>
  )
}

export function ConfigForm ({ config, handleConfigChange, downloadImage, handleCopyImg }) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const anchorRef = useRef(null);
  const fontOptions = [
    { label: '黑体', value: 'simhei' },
    { label: '宋体', value: 'simsun' },
    { label: '楷体', value: 'kaiti' },
    { label: '仿宋', value: 'fangsong' }
  ];
  const bgColorOptions = [
    'linear-gradient(310deg,rgb(214,233,255),rgb(214,229,255),rgb(209,214,255),rgb(221,209,255),rgb(243,209,255),rgb(255,204,245),rgb(255,204,223),rgb(255,200,199),rgb(255,216,199),rgb(255,221,199))',
    'linear-gradient(160deg,rgb(204,251,252),rgb(197,234,254),rgb(189,211,255))',
    'linear-gradient(150deg,rgb(255,242,158),rgb(255,239,153),rgb(255,231,140),rgb(255,217,121),rgb(255,197,98),rgb(255,171,75),rgb(255,143,52),rgb(255,115,33),rgb(255,95,20),rgb(255,87,15))',
    'linear-gradient(345deg,rgb(211,89,255),rgb(228,99,255),rgb(255,123,247),rgb(255,154,218),rgb(255,185,208),rgb(255,209,214),rgb(255,219,219))',
    'linear-gradient(150deg, #ef32d9, #89fffd)',
    'linear-gradient(25deg, #7c2df3, #7167f7, #5992fb, #00b9ff)',
    'linear-gradient(25deg, #00b7f7, #a2b7b5, #d5b871, #f6b900)',
    'linear-gradient(150deg,rgb(0,224,245),rgb(31,158,255),rgb(51,85,255))',
    'linear-gradient(150deg,rgb(0,176,158),rgb(19,77,93),rgb(16,23,31))',
    'linear-gradient(150deg,rgb(95,108,138),rgb(48,59,94),rgb(14,18,38))'
  ]
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
  const onHandleCopyImg = () => {
    handleCopyImg(() => {
      console.log()
      setCopied(true);
    })
  };
  const handleBgGradientClick = (color) => {
    handleConfigChange(color, 'gradientBgColor');
  };

  const handleBgColorClick = (color) => {
    handleConfigChange(color, 'bgColor');
    handleConfigChange('', 'gradientBgColor');
  };

  const onChangeTheme = (themeName) => {
    handleConfigChange(themeName, 'theme')
    if (themeName === 'picture') {
      handleConfigChange(40, 'horizPad');
      handleConfigChange(40, 'vertPad');
    } else if (themeName === 'stylish') {
      handleConfigChange(20, 'horizPad');
      handleConfigChange(20, 'vertPad');
    } else if (themeName === 'modern') {
      handleConfigChange(20, 'horizPad');
      handleConfigChange(20, 'vertPad');
    }
    if (themeName === 'mobile') {
      console.log("themeName", themeName)
      handleConfigChange('/page/coverview-mbg.jpg', 'bgImg');
    } else {
      handleConfigChange('/page/coverview-bg.png', 'bgImg');
    }
  };
  return (
    <>
      <Box className={styles.setItem}>
        <Typography variant="h5">主题</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {/* 主题列表 */}
          <div className={clsx(styles.themeItem, config.theme === 'basic' ? styles.on : '')}
            onClick={() => onChangeTheme('basic')}><BasicTheme /></div>
          <div className={clsx(styles.themeItem, config.theme === 'background' ? styles.on : '')}
            onClick={() => onChangeTheme('background')}><BackgroundTheme /></div>
          <div className={clsx(styles.themeItem, config.theme === 'stylish' ? styles.on : '')}
            onClick={() => onChangeTheme('stylish')}><StylishTheme /></div>
          <div className={clsx(styles.themeItem, config.theme === 'outline' ? styles.on : '')}
            onClick={() => onChangeTheme('outline')}><OutlineTheme /></div>
          <div className={clsx(styles.themeItem, config.theme === 'modern' ? styles.on : '')}
            onClick={() => onChangeTheme('modern')}><ModernTheme /></div>
          <div className={clsx(styles.themeItem, config.theme === 'preview' ? styles.on : '')}
            onClick={() => onChangeTheme('preview')}><PreviewTheme /></div>
          <div className={clsx(styles.themeItem, config.theme === 'mobile' ? styles.on : '')}
            onClick={() => onChangeTheme('mobile')}><MobileTheme /></div>
          <div className={clsx(styles.themeItem, config.theme === 'picture' ? styles.on : '')}
            onClick={() => onChangeTheme('picture')}><PictureTheme /></div>
        </Box>
      </Box>
      <Box className={styles.setItem}>
        <Typography variant="h5">背景色</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {bgColorOptions.map((el, index) => (
            <div className={clsx(styles.bgGradient, config.gradientBgColor === el ? styles.on : '')} style={{ backgroundImage: el }}
            onClick={() => handleBgGradientClick(el)} key={index}></div>
          ))}
          <MoreGradient handleConfigChange={handleConfigChange} />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '5px' }}>
          <ColorPicker
            defaultColor={config.bgColor}
            onChange={val => handleBgColorClick(val)}
          />
          <RandomTheme onThemeChange={(theme, Pattern) => handleBgColorClick(theme.bgColor)} />
        </Box>
      </Box>
      {['background', 'stylish', 'preview', 'mobile', 'picture'].includes(config.theme) ?
        <Box className={styles.setItem}>
          <Typography variant="h5">背景图</Typography>
          <Button component="label" size="small" variant="contained" sx={{ width: '80px' }} startIcon={<AddPhotoAlternateIcon />}>
            上传<VisuallyHiddenInput type="file" onChange={(e) => handleConfigChange(URL.createObjectURL(e.target.files[0]), 'bgImg')} />
          </Button>
        </Box>
        : <></>
      }
      <Box sx={{ display: 'flex', gap: '30px' }}>
        <Box className={styles.setItem} sx={{ width: '50%' }}>
          <Typography variant="h5">字体<span className={styles.fontInfos}>（中文）</span></Typography>
          <Select
            value={config.font}
            onChange={val => handleConfigChange(val.target.value, 'font')}
            label=""
            className={styles.sizeInput}
            sx={{ '& > div': { paddingTop: '6px', paddingBottom: '6px' } }}
            renderValue={(selected) => {
              if (selected.length === 0) {
                return <em style={{ color: '#A8ABB2' }}>选择字体</em>;
              }
              const item = fontOptions.find(el => el.value === selected);
              return item.label;
            }}
            displayEmpty
            size='small'
            fullWidth
          >
            {fontOptions.map(el => (
              <MenuItem value={el.value} key={el.value}>{el.label}</MenuItem>
            ))}
          </Select>
        </Box>
        {['basic', 'modern', 'picture'].includes(config.theme) ?
          <Box className={styles.setItem} sx={{ width: '50%' }}>
            <Typography variant="h5">圆角</Typography>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="caption">0px</Typography>
              </Grid>
              <Grid item xs sx={{ display: 'flex' }}>
                <Slider
                  value={config.borderRadius}
                  aria-label='Default'
                  min={0}
                  step={1}
                  max={40}
                  size='small'
                  valueLabelDisplay='auto'
                  onChange={e => handleConfigChange(e.target.value, 'borderRadius')}
                />
              </Grid>
              <Grid item>
                <Typography variant="caption">40px</Typography>
              </Grid>
            </Grid>
          </Box>
          : <></>
        }
      </Box>
      {['stylish', 'modern', 'picture'].includes(config.theme) ?
        <Box sx={{ display: 'flex', gap: '30px' }}>
          <Box className={styles.setItem} sx={{ width: '50%' }}>
            <Typography variant="h5">上下间距</Typography>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="caption">10px</Typography>
              </Grid>
              <Grid item xs sx={{ display: 'flex' }}>
                <Slider
                  value={config.vertPad}
                  aria-label='Default'
                  min={10}
                  max={100}
                  size='small'
                  valueLabelDisplay='auto'
                  onChange={e => handleConfigChange(e.target.value, 'vertPad')}
                />
              </Grid>
              <Grid item>
                <Typography variant="caption">100px</Typography>
              </Grid>
            </Grid>
          </Box>
          <Box className={styles.setItem} sx={{ width: '50%' }}>
            <Typography variant="h5">左右间距</Typography>
            <Grid container spacing={1} alignItems="center">
              <Grid item>
                <Typography variant="caption">10px</Typography>
              </Grid>
              <Grid item xs sx={{ display: 'flex' }}>
                <Slider
                  value={config.horizPad}
                  aria-label='Default'
                  min={10}
                  max={200}
                  size='small'
                  valueLabelDisplay='auto'
                  onChange={e => handleConfigChange(e.target.value, 'horizPad')}
                />
              </Grid>
              <Grid item>
                <Typography variant="caption">200px</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>
        : <></>
      }
      <Box className={styles.setItem}>
        <Typography variant="h5">宽度</Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Typography variant="caption">600px</Typography>
          </Grid>
          <Grid item xs sx={{ display: 'flex' }}>
            <Slider
              value={config.width}
              aria-label='Default'
              min={600}
              max={1000}
              size='small'
              valueLabelDisplay='auto'
              onChange={e => handleConfigChange(e.target.value, 'width')}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption">1000px</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={styles.setItem}>
        <Typography variant="h5">宽高比</Typography>
        <ToggleButtonGroup
          value={config.ratio}
          exclusive
          onChange={(event, val) => handleConfigChange(val, 'ratio')}
          aria-label='Ratio'
          size='small'
        >
          <ToggleButton sx={{ padding: '7px 12px' }} value={0.5}>1:2</ToggleButton>
          <ToggleButton sx={{ padding: '7px 12px' }} value={0.666666666}>2:3</ToggleButton>
          <ToggleButton sx={{ padding: '7px 12px' }} value={0.6}>3:5</ToggleButton>
          <ToggleButton sx={{ padding: '7px 12px' }} value={0.57}>4:7</ToggleButton>
          <ToggleButton sx={{ padding: '7px 12px' }} value={0.4}>5:8</ToggleButton>
          <ToggleButton sx={{ padding: '7px 12px' }} value={1.7777}>16:9</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={styles.setItem}>
        <Button variant="contained" sx={{ marginBottom: '10px' }} startIcon={<CopyAll />} onClick={onHandleCopyImg} disableElevation fullWidth>复制图片</Button>
        <ButtonGroup variant="contained" ref={anchorRef} aria-label="导出图片" disableElevation fullWidth>
          <Button startIcon={<SaveAltIcon />} onClick={handleToggle}>导出图片</Button>
          <Button
            aria-controls={open ? 'split-button-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-label="选择格式并导出图片"
            aria-haspopup="menu"
            onClick={handleToggle}
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
                      PNG / 1X 
                    </MenuItem>
                    <MenuItem onClick={(event) => handleMenuItemClick(event, 2, 'png')}>
                      PNG / 2X 
                    </MenuItem>
                    <MenuItem onClick={(event) => handleMenuItemClick(event, 1, 'jpg')}>
                      JPG / 1X 
                    </MenuItem>
                    <MenuItem onClick={(event) => handleMenuItemClick(event, 2, 'jpg')}>
                      JPG / 2X
                    </MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Box>
    </>
  )
}

export default function () {
  return (
    <Layout title='封面图生成器' description='封面图神器，根据配置快速生成一张漂亮的文章封面图'>
      <Head>
        <meta name="keywords" content='封面图,头图,生成器,图片工具,文章配图' />
      </Head>
      <div className={styles.page}>
        <div className="container">
          <div className={styles.main}>
            <Main normal={true} />
            <Box sx={{ margin: '4rem 0 0' }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h2 className='text--center margin-bottom--lg'>🛠 常见问题</h2>
                  <FrequentQuestion />
                </Grid>
              </Grid>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <GoogleAdsBlock model='inFluid' height='80px' />
            </Box>
            <Box sx={{ margin: '6rem 0 4rem' }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <h2 className='text--center margin-bottom--sm'>💬 交流讨论</h2>
                  <GiscusComponent reactionsEnabled="0" />
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>
      </div>
    </Layout>
  )
}
