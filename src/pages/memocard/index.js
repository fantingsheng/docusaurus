import React from 'react';
import { useState, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import GiscusComponent from '@site/src/components/GiscusComponent';
import { Grid, Select, Button, IconButton, ButtonGroup, MenuItem, MenuList, Popper, FormControlLabel, Switch, TextField, Paper, Box, Grow, Typography,
  ClickAwayListener, Slider } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import SaveAltIcon from '@mui/icons-material/SaveAlt';
import CopyAll from '@mui/icons-material/CopyAll';
import GoogleAdsBlock from '@site/src/components/GoogleAdsBlock';
import RandomTheme from './RandomTheme';
import TextCard from './TextCard';
import ColorPicker from '@site/src/components/ColorPicker';
import { styled } from '@mui/material/styles';
import styles from './style.module.scss';
import clsx from 'clsx';
import { toPng, toJpg, toBlob } from '@site/src/utils/image';
import { downloadByUrl } from '@site/src/utils';

import NormalTheme from './themeSkeleton/NormalTheme';
import GridTheme from './themeSkeleton/GridTheme';
import PaperTheme from './themeSkeleton/PaperTheme';
import ShadowTheme from './themeSkeleton/ShadowTheme';
import Paper2Theme from './themeSkeleton/Paper2Theme';

import FrequentQuestion from './FaqList';
import MoreGradient from './MoreGradient';
import EmojiGallery from '@site/docs/collection/charactor';

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
    fontSize: 14,
    bgColor: '#949ee5',
    content: '🤗 这是一款文字卡片制作工具，你可以输入文字生成精美的文字卡片，然后分享到社交网站或直接复制到聊天工具中。\r\n\r\n它支持不同背景色的设置，可以是纯色和渐变色。\r\n它还支持多个主题的切换。\r\n在这里写上你的文字试试效果吧。👨‍💻',
    url: '',
    gradientBgColor: '',
    icon: 'react',
    ratio: 0.5,
    vertPad: 40,
    horizPad: 40,
    width: 810,
    title: '欢迎来到太空编程站点',
    author: '编程范儿',
    theme: 'normal',
    dark: false,
    opacity: 0.7,
    borderRadius: 10,
    bgImg: ''
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
    const fileName = `spacexcode-memocard-${date.getMinutes()}${date.getSeconds()}${scaleName}.${format}`;
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
      })
  };

  return (
    <Box sx={{ padding: '40px 0' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={ normal ? 8 : 12 }>
          <Box className={styles.card} sx={{ padding: '20px 10px', overflowX: 'auto' }}>
            {/* 生成图显示 */}
            <div className={styles.initBox}>
              <div ref={coverRef} className={styles.preview} style={{ width: config.width + 'px'}}>
                <TextCard config={config} />
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
            <Box className={styles.card} sx={{ padding: '20px 20px 30px', marginTop: '24px' }}>
              <ContentForm config={config} handleConfigChange={handleConfigChange} />
            </Box>
            : <></>
          }
        </Grid>
        {
          !normal ? 
          <Grid item xs={12} md={6}>
            <Box className={styles.card} sx={{ padding: '20px 20px 30px' }}>
              <ContentForm config={config} handleConfigChange={handleConfigChange} />
            </Box>
          </Grid>
          : <></>
        }
          {/* 配置 */}
        <Grid item xs={12} md={normal ? 4 : 6}>
          <Box className={styles.card} sx={{ padding: '20px 20px 30px' }}>
            <ConfigForm config={config} handleConfigChange={handleConfigChange} downloadImage={downloadImage} handleCopyImg={handleCopyImg} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export function ContentForm ({ config, handleConfigChange }) {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const reg = /^(?:(http|https):\/\/)?((?:[\w-]+\.)+[a-z0-9]+)((?:\/[^/?#]*)+)?(\?[^#]+)?(#.+)?$/i;

  return (
    <>
      <Box className={styles.setItem} sx={{ marginTop: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant="h5">📝 在这里输入卡片上的文字内容</Typography>
          <span>
            <IconButton aria-label="清除" size="small" sx={{ marginBottom: '5px' }} onClick={() => handleConfigChange('', 'content')}>
              <svg aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 576 512">
              <path fill="#383d94" d="M290.7 57.4L57.4 290.7c-25 25-25 65.5 0 90.5l80 80c12 12 28.3 18.7 45.3 18.7H288h9.4H512c17.7 0 32-14.3 32-32s-14.3-32-32-32H387.9L518.6 285.3c25-25 25-65.5 0-90.5L381.3 57.4c-25-25-65.5-25-90.5 0zM297.4 416H288l-105.4 0-80-80L227.3 211.3 364.7 348.7 297.4 416z"></path></svg>
            </IconButton>
            <IconButton aria-label="表情符号" ref={anchorRef} size="small" sx={{ marginBottom: '5px' }} onClick={handleToggle}>
              <AddReactionIcon sx={{ fontSize: '18px' }} color="primary" />
            </IconButton>
            <Popper sx={{ zIndex: 1, width: '50%' }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
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
                      <Box sx={{ backgroundColor: '#fff', padding: '10px', maxHeight: '400px', overflowY: 'scroll' }}>
                        <EmojiGallery fontSize='18px' spacing={1} emojiList={
                          ['😅', '😤', '🥳', '😎', '😄', '🤔', '🤯', '🤮', '🤬', '🤐', '🤤', '🥶', '🙃', '🧐', '😍', '💁‍♂️', '🕵️‍♂️', '🙋', '👀', '🕵️‍♂️', 
'🧑', '🧟', '🧟‍♀️', '🎅', '🧙‍♀️', '❤️', '🙏', '💪🏼', '👋', '🤝', '🥰', '🔥', '💗', '🙌', '👍', '🤙', '💯', '👊', '💥', '🚫', '💬', '📨', '👇', '👌🏻', '🎤',
'👉', '🎉', '🍻', '👨‍💻', '📚', '🎨', '📝', '📈', '⏰', '✒️', '📋', '🖌', '💻', '📊', '💬', '📘', '🗓', '📖', '📄️', '📐', '💹', '✅',
'❎', '📌', '📰', '🖨', '📁', '🧮', '🎓', '🔢', '🖍️', '☕', '🎮', '🔬️',
'🚗', '🛵', '♿️', '🚥', '🚦', '🚀', '✈️', '🏎️', '🚴‍♀️', '🚄', '🛴', '🏍️', '⛵️', '🚢', '🚕', '🚖', '⛴️', '🚚', '🛺',
'🍍', '🍈', '🍅', '🎃', '🥝', '🥑', '🍐', '🦪', '🥥', '🍎', '🍊', '🍌', '🌰', '🍒', '🥭', '🥒', '🍓', '🍉', '🥬', '🍠',
  '🌶️', '🧅', '🌽', '🥔', '🧄', '🥦', '🥕', '🥜',
  '🦄', '🐋', '🐱', '🦀', '🦐', '🐡', '👻', '🐶', '🐞', '🐜', '🐯', '🐷', '👾', '🐛', '🦖', '🦔', '🦅', '🦆', '🐤', '🦢',
  '🐘', '🐒', '🐭', '🐰', '🐍', '🦉', '🦁️', '🐟', '🐳', '🐸', '🦟', '🦈', '🐎', '🐢', '🐬', '🦕', '🐕', '🦌', '🦑', '🦋',
  '🦗', '🦂', '🧸', '🦎', '🦏', '🦊', '🦍',
'⛹', '🏀', '⚽', '🎯', '🏊‍♀️', '🏊', '🔫', '🏈', '🏓️', '💃', '🏃‍♀️', '🏃', '🎿', '🥊', '🏋', '🤺', '🤸', '🤾',
'✨', '🔨', '🛠', '🌟', '💰', '🥤', '☁️', '⭐', '⚡️', '🏳️‍🌈', '🔍', '🗑️', '🔄', '🧼', '🧹', '📍', '🌍', '🎩', '📦', '🌱',
  '🌈', '🔗', '💨', '🔌', '♨️', '🌛', '☀️', '🧬', '💍', '💡', '🛡️', '🦺', '⚛️', '📷', '🔋', '👓', '⁉️', '🤳', '☘️',
  '💎', '🎄', '🍰', '🖼', '💦', '💫', '⏳', '🏠', '☪️', '✔️', '❌', '🔭', '🏰', '📬', '🎈', '🔊', '🗂', '🥇', '🥈', '🥉',
  '📫', '🍨', '🔧', '🌐', '🧪', '🧩', '➗', '🌌', '🛢️', '🔔', '⛔', '⚓', '⚙️', '💥', '💸', '💅', '🌑', '📲',
  '🦾', '✂️', '🏗️', '🔌', '⛓️', '🤖', '📤', '🎬', '⚖️', '🏛', '🚧', '❄️', '⭕']
                        } />
                      </Box>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </span>
        </Box>
        <TextField
          value={config.content}
          onChange={e => handleConfigChange(e.target.value, 'content')}
          placeholder='卡片上的文字内容'
          size='small'
          className={styles.sizeInput}
          multiline
          minRows={6}
          maxRows={10}
          fullWidth
        />
      </Box>
      <Box className={styles.setItem}>
        <Typography variant="h5">📬 文字下面的署名</Typography>
        <TextField
          value={config.author}
          onChange={e => handleConfigChange(e.target.value, 'author')}
          placeholder='署名'
          className={styles.sizeInput}
          size='small'
          fullWidth
        />
      </Box>
      <Box className={styles.setItem}>
        <Typography variant="h5">🔗 插入链接以二维码显示</Typography>
        <TextField
          error={!!config.url && !reg.test(config.url)}
          value={config.url}
          onChange={e => handleConfigChange(e.target.value, 'url')}
          placeholder='https://spacexcode.com'
          className={styles.sizeInput}
          size='small'
          autoComplete='false'
          fullWidth
        />
      </Box>
    </>
  )
}

export function ConfigForm ({ config, handleConfigChange, downloadImage, handleCopyImg }) {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const anchorRef = useRef(null);
  const anchorRef1 = useRef(null);
  const fontOptions = [
    { label: '黑体', value: 'simhei' },
    { label: '宋体', value: 'simsun' },
    { label: '楷体', value: 'kaiti' },
    { label: '仿宋', value: 'fangsong' }
  ];
  const fontSizeOptions = [
    { label: '12px', value: 12 },
    { label: '13px', value: 13 },
    { label: '14px', value: 14 },
    { label: '15px', value: 15 },
    { label: '16px', value: 16 },
    { label: '17px', value: 17 },
    { label: '18px', value: 18 },
    { label: '19px', value: 19 },
    { label: '20px', value: 20 }
  ]
  const bgColorOptions = [
    'linear-gradient(310deg,rgb(214,233,255),rgb(214,229,255),rgb(209,214,255),rgb(221,209,255),rgb(243,209,255),rgb(255,204,245),rgb(255,204,223),rgb(255,200,199),rgb(255,216,199),rgb(255,221,199))',
    'linear-gradient(160deg,rgb(204,251,252),rgb(197,234,254),rgb(189,211,255))',
    'linear-gradient(150deg,rgb(255,242,158),rgb(255,239,153),rgb(255,231,140),rgb(255,217,121),rgb(255,197,98),rgb(255,171,75),rgb(255,143,52),rgb(255,115,33),rgb(255,95,20),rgb(255,87,15))',
    'linear-gradient(345deg,rgb(211,89,255),rgb(228,99,255),rgb(255,123,247),rgb(255,154,218),rgb(255,185,208),rgb(255,209,214),rgb(255,219,219))',
    'linear-gradient(135deg, rgb(255, 95, 109) 0%, rgb(255, 195, 113) 100%)',
    'linear-gradient(150deg, #ef32d9, #89fffd)',
    'linear-gradient(25deg, #7c2df3, #7167f7, #5992fb, #00b9ff)',
    'linear-gradient(135deg, rgb(21, 126, 25) 0%, rgb(178, 202, 28) 100%)',
    'linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)',
    'linear-gradient(135deg, rgb(5, 117, 230) 0%, rgb(0, 242, 96) 100%)',
    'linear-gradient(25deg, #00b7f7, #a2b7b5, #d5b871, #f6b900)',
    'linear-gradient(150deg,rgb(0,224,245),rgb(31,158,255),rgb(51,85,255))',
    'linear-gradient(135deg, rgb(138, 35, 135) 0%, rgb(242, 113, 33) 100%)',
    'linear-gradient(135deg, rgb(36, 198, 220) 0%, rgb(81, 74, 157) 100%)',
    'linear-gradient(-45deg, rgb(114, 122, 154), rgb(216, 219, 233))',
    'linear-gradient(150deg,rgb(0,176,158),rgb(19,77,93),rgb(16,23,31))',
    'linear-gradient(150deg,rgb(95,108,138),rgb(48,59,94),rgb(14,18,38))'
  ]
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleVisible = () => {
    setVisible((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const handleVisibleClose = (event) => {
    if (anchorRef1.current && anchorRef1.current.contains(event.target)) {
      return;
    }
    setVisible(false);
  };
  const handleMenuItemClick = (event, scale, format) => {
    downloadImage(scale, format);
    setOpen(false);
  };
  const onHandleCopyImg = () => {
    handleCopyImg(() => {
      setCopied(true);
    })
  };
  const handleBgGradientClick = (color) => {
    handleConfigChange('', 'bgImg');
    handleConfigChange(color, 'gradientBgColor');
  }
  const handleBgUpload = (e) => {
    handleConfigChange(URL.createObjectURL(e.target.files[0]), 'bgImg');
    handleConfigChange('', 'gradientBgColor');
  }

  const handleBgColorClick = (color) => {
    handleConfigChange(color, 'bgColor');
    handleConfigChange('', 'bgImg');
    handleConfigChange('', 'gradientBgColor');
  }

  return (
    <>
      <Box className={styles.setItem} sx={{ marginTop: 0 }}>
        <Typography variant="h5">主题</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
          {/* 主题列表 */}
          <div className={clsx(styles.themeItem, config.theme === 'normal' ? styles.on : '')}
            onClick={() => handleConfigChange('normal', 'theme')}><NormalTheme /></div>
          <div className={clsx(styles.themeItem, config.theme === 'grid' ? styles.on : '')}
            onClick={() => handleConfigChange('grid', 'theme')}><GridTheme /></div>
          <div className={clsx(styles.themeItem, config.theme === 'paper' ? styles.on : '')}
            onClick={() => handleConfigChange('paper', 'theme')}><PaperTheme /></div>
          <div className={clsx(styles.themeItem, config.theme === 'shadow' ? styles.on : '')}
            onClick={() => handleConfigChange('shadow', 'theme')}><ShadowTheme /></div>
          <div className={clsx(styles.themeItem, config.theme === 'paper2' ? styles.on : '')}
            onClick={() => handleConfigChange('paper2', 'theme')}><Paper2Theme /></div>
        </Box>
      </Box>
      <Box className={styles.setItem}>
        <Typography variant="h5">背景</Typography>
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
            onChange={(color) => handleBgColorClick(color)}
          />
          <RandomTheme onThemeChange={(theme, Pattern) => handleBgColorClick(theme.bgColor)} />
          <Button component="label" variant="contained" sx={{ padding: '2px 0px', minWidth: '30px' }}>
            <AddPhotoAlternateIcon sx={{ fontSize: 20, marginRight: '0' }} />
            <VisuallyHiddenInput type="file" onChange={handleBgUpload} />
          </Button>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '20px' }}>
        <Box className={styles.setItem} sx={{ width: '40%' }}>
          <Typography variant="h5">外观</Typography>
          <FormControlLabel
            control={
              <Switch
                value={config.dark}
                onChange={e => handleConfigChange(e.target.checked, 'dark')}
                inputProps={{ 'aria-label': 'controlled' }}
              />
            }
            className={styles.sizeInput}
            label="深色主题"
          />
        </Box>
        <Box className={styles.setItem} sx={{ width: '60%' }}>
          <Typography variant="h5">字体及大小<span className={styles.fontInfos}>（中文）</span></Typography>
          <Box sx={{ display: 'flex', gap: '5px' }}>
            <Select
              value={config.font}
              onChange={val => handleConfigChange(val.target.value, 'font')}
              size='small'
              className={styles.sizeInput}
              sx={{ '& > div': { paddingTop: '6px', paddingBottom: '6px' } }}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em style={{ color: '#A8ABB2' }}>选择字体</em>;
                }
                const item = fontOptions.find(el => el.value === selected);
                return item.label;
              }}
              fullWidth
              displayEmpty
            >
              {fontOptions.map(el => (
                <MenuItem value={el.value} key={el.value}>{el.label}</MenuItem>
              ))}
            </Select>
            <Select
              value={config.fontSize}
              onChange={val => handleConfigChange(val.target.value, 'fontSize')}
              size='small'
              className={styles.sizeInput}
              sx={{ '& > div': { paddingTop: '6px', paddingBottom: '6px' } }}
              renderValue={(selected) => {
                if (selected.length === 0) {
                  return <em style={{ color: '#A8ABB2' }}>选择字体大小</em>;
                }
                const item = fontSizeOptions.find(el => el.value === selected);
                return item.label;
              }}
              fullWidth
              displayEmpty
            >
              {fontSizeOptions.map(el => (
                <MenuItem value={el.value} key={el.value}>{el.label}</MenuItem>
              ))}
            </Select>
          </Box>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '30px' }}>
        <Box className={styles.setItem} sx={{ width: '50%' }}>
          <Typography variant="h5">透明度</Typography>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Typography variant="caption">0.1</Typography>
            </Grid>
            <Grid item xs sx={{ display: 'flex' }}>
              <Slider
                value={config.opacity}
                aria-label='Default'
                min={0.1}
                max={1}
                step={0.05}
                size='small'
                valueLabelDisplay='auto'
                onChange={e => handleConfigChange(e.target.value, 'opacity')}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">1</Typography>
            </Grid>
          </Grid>
        </Box>
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
      </Box>
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
      <Box className={styles.setItem}>
        <Typography variant="h5">卡片宽度</Typography>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Typography variant="caption">320px</Typography>
          </Grid>
          <Grid item xs sx={{ display: 'flex' }}>
            <Slider
              value={config.width}
              aria-label='Default'
              min={320}
              max={860}
              size='small'
              valueLabelDisplay='auto'
              onChange={e => handleConfigChange(e.target.value, 'width')}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption">860px</Typography>
          </Grid>
        </Grid>
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
    <Layout title='文字卡片生成器' description='一款将文字转化为图片的工具，内置了丰富的样式和配色，简单调节参数快速生成一张漂亮的文字卡片，用于展示和分享'>
      <Head>
        <meta name="keywords" content='文字卡片,头图,生成器,工具,文字图片,导出工具,文字样式' />
      </Head>
      <div className={styles.page}>
        <div className="container">
          <Main normal={true} />
          <Box sx={{ margin: '4rem 0' }}>
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
    </Layout>
  )
}
