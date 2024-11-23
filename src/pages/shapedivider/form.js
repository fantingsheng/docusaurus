import React from 'react';
import { useState } from 'react';
import { FormControl, Avatar, SpeedDial, SpeedDialAction, Select,
  IconButton, MenuItem, Switch, Slider, Card, CardContent, Grid, Typography } from '@mui/material';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import BrowserWindow from '@site/src/components/BrowserWindow'
import ColorPicker from '@site/src/components/ColorPicker';
import Image from '@theme/IdealImage';
import { shapePathMap, shapeOptions } from '@site/src/config/data/shapedivider/wave';
import styles from './style.module.css';
import Image1 from '/page/shapedivider-1.png';
import Image2 from '/page/shapedivider-2.png';
import Image3 from '/page/shapedivider-3.png';
import Image4 from '/page/shapedivider-4.png';

export default function Form () {

  const [formData, setFormData] = useState({
    shape: 'waves',
    color: '#FFFFFF',
    flip: false,
    invert: false,
    height: 150,
    width: 100
  })
  const [flipDisabled, setFlipDisabled] = useState(false);
  const [invertDisabled, setInvertDisabled] = useState(false);
  const [bg, setBg] = useState(4);
  const [mapKey, setMapKey] = useState('waves');

  const actions = [
    { icon: '/page/shapedivider-1-small.png', name: '背景一' },
    { icon: '/page/shapedivider-2-small.png', name: '背景二' },
    { icon: '/page/shapedivider-3-small.png', name: '背景三' },
    { icon: '/page/shapedivider-4-small.png', name: '背景四' }
  ];

  const Images = [Image1, Image2, Image3, Image4];

  const handleChange = (val, key) => {
    setFormData((prev) => ({ ...prev, [key]: val }))
    if (key === 'shape') {
      if (['curve', 'triangle', 'arrow', 'split', 'book'].includes(val)) {
        setFlipDisabled(true);
      } else {
        setFlipDisabled(false);
      }
      if (['waves-opacity', 'tilt'].includes(val)) {
        setInvertDisabled(true);
      } else {
        setInvertDisabled(false);
      }
      setMapKey(formData.invert ? val + '-invert' : val);
    }
    if (key === 'invert') {
      if (['waves', 'curve', 'curve-asymmetrical', 'triangle', 'triangle-asymmetrical', 'arrow',
        'split', 'book'].includes(formData.shape) && val === true) {
        setMapKey(formData.shape + '-invert');
      } else {
        setMapKey(formData.shape)
      }
    }
  }

  const downloadSvg = () => {
    const svgBlob = document.querySelector('#divider').outerHTML;
    var blob = new Blob([svgBlob], { type: 'image/svg' });
    var href = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.style.display = 'none';
    a.href = href;
    a.download = 'shapedivider-' + formData.shape + '.svg';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      a.remove();
    }, 1000);
    URL.revokeObjectURL(href);
  }

  return (
    <div className='padding-bottom--lg'>
      <div className='row'>
        <div className='col col--8 col--offset-2'>
          <Card variant="outlined" className={styles.formWrap}>
            <CardContent sx={{ position: 'relative', overflow: 'visible', padding: '20px 20px 40px!important' }}>
              <Grid container spacing={{ xs: 2, md: 3, lg: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={2} md={4}>
                  <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>形状</Typography>
                  <FormControl variant='standard' fullWidth>
                    <Select
                      value={formData.shape}
                      onChange={e => handleChange(e.target.value, 'shape')}
                      size='small'
                    >
                      {shapeOptions.map((el, index) => (
                        <MenuItem key={index} value={el.value}>{el.label}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={2} md={4}>
                  <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>颜色</Typography>
                  <div style={{ display: 'flex' }}>
                    <ColorPicker defaultColor={formData.color} onChange={val => handleChange(val, 'color')} />
                  </div>
                </Grid>
                <Grid item xs={2} md={2}>
                  <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>翻转</Typography>
                  <Switch
                    value={formData.flip}
                    disabled={flipDisabled}
                    onChange={e => handleChange(e.target.checked, 'flip')}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </Grid>
                <Grid item xs={2} md={2}>
                  <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>倒转</Typography>
                  <Switch
                    value={formData.invert}
                    disabled={invertDisabled}
                    onChange={e => handleChange(e.target.checked, 'invert')}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </Grid>
                <Grid item xs={2} md={6}>
                  <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>高度（px）</Typography>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Typography variant="caption">0px</Typography>
                    </Grid>
                    <Grid item xs sx={{ display: 'flex' }}>
                      <Slider
                        value={formData.height}
                        aria-label='Default'
                        min={0}
                        max={500}
                        valueLabelDisplay='auto'
                        size='small'
                        onChange={e => handleChange(e.target.value, 'height')}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">500px</Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} md={6}>
                  <Typography variant="subtitle1" sx={{ fontWeight: '600' }}>宽度（%）</Typography>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Typography variant="caption">100%</Typography>
                    </Grid>
                    <Grid item xs sx={{ display: 'flex' }}>
                      <Slider
                        value={formData.width}
                        aria-label='Default'
                        min={100}
                        max={300}
                        size='small'
                        valueLabelDisplay='auto'
                        onChange={e => handleChange(e.target.value, 'width')}
                      />
                    </Grid>
                    <Grid item>
                      <Typography variant="caption">300%</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <div className={styles.downloadBtn}>
                <IconButton onClick={downloadSvg}>
                  <CloudDownloadOutlinedIcon sx={{ fontSize: 28 }} color='primary' />
                </IconButton>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className='row margin-top--xl'>
        <div className='col col--12'>
          <BrowserWindow bodyPad='0' url='https://spacexcode.com/shapedivider'>
            <div className={styles.previewArea}>
              {
                [bg].map(el => <Image key={el} img={Images[el - 1]} />)
              }
              <div
                className={styles.shapeDivider}
                style={{transform: formData.invert ? 'rotate(180deg)' : 'none'}}>
                <svg
                  xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 120'
                  preserveAspectRatio='none'
                  id='divider'
                  style={{
                    width: 'calc(' + formData.width + '% + 1.3px)',
                    height: formData.height + 'px',
                    transform: formData.flip ? 'rotateY(180deg)' : 'none'
                  }}>
                    {
                      shapePathMap[mapKey].map((el, index) => (
                        <path
                          key={index}
                          d={el.path}
                          style={{fill: formData.color}}
                          opacity={el.opacity}
                          className='shape-fill'>
                        </path>
                      ))
                    }
                </svg>
              </div>
              <SpeedDial
                ariaLabel="背景切换"
                sx={{ 
                  position: 'absolute',
                  bottom: 50,
                  right: 40,
                  '& > button': { background: 'linear-gradient(to right, #ec77ab 0%, #7873f5 100%)' } }}
                size='small'
                icon={<WallpaperIcon />}
              >
                {actions.map((action, index) => (
                  <SpeedDialAction
                    key={action.name}
                    icon={<Avatar src={action.icon} />}
                    tooltipTitle={action.name}
                    onClick={() => setBg(index + 1)}
                  />
                ))}
              </SpeedDial>
            </div>
          </BrowserWindow>
        </div>
      </div>
    </div>
  )
}
