import React from 'react';
import { useState } from 'react';
import { FormControl, Avatar, SpeedDial, SpeedDialAction, Select,
  IconButton, MenuItem, Switch, Slider, Card, CardContent } from '@mui/material';
import CloudDownloadOutlinedIcon from '@mui/icons-material/CloudDownloadOutlined';
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import BrowserWindow from '@site/src/components/BrowserWindow'
import { ColorPicker } from 'material-ui-color';
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
  const [bg, setBg] = useState(1);
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
    <div className='container padding-bottom--lg'>
      <div className='row'>
        <div className='col col--8 col--offset-2'>
          <Card variant="outlined" className={styles.formWrap}>
            <CardContent sx={{ position: 'relative', overflow: 'visible', paddingTop: '10px', paddingBottom: '20px !important' }}>
              <div className='row padding-horiz--md'>
                <div className='col col--4 margin-top--md'>
                  <div className={styles.label}>形状</div>
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
                </div>
                <div className='col col--4 margin-top--md'>
                  <div className={styles.label}>颜色</div>
                  <div style={{ display: 'flex' }}>
                    <ColorPicker value={formData.color} onChange={val => handleChange(`#${val.hex}`, 'color')} fullWidth />
                  </div>
                </div>
                <div className='col col--2 margin-top--md'>
                  <div className={styles.label}>翻转</div>
                  <Switch
                    value={formData.flip}
                    disabled={flipDisabled}
                    onChange={e => handleChange(e.target.checked, 'flip')}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </div>
                <div className='col col--2 margin-top--md'>
                  <div className={styles.label}>倒转</div>
                  <Switch
                    value={formData.invert}
                    disabled={invertDisabled}
                    onChange={e => handleChange(e.target.checked, 'invert')}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                </div>
                <div className='col col--6 margin-top--md'>
                  <div className={styles.label}>高度（px）</div>
                  <Slider
                    value={formData.height}
                    aria-label='Default'
                    min={0}
                    max={500}
                    valueLabelDisplay='auto'
                    onChange={e => handleChange(e.target.value, 'height')}
                    />
                </div>
                <div className='col col--6 margin-top--md'>
                  <div className={styles.label}>宽度（%）</div>
                  <Slider
                    value={formData.width}
                    aria-label='Default'
                    min={100}
                    max={300}
                    valueLabelDisplay='auto'
                    onChange={e => handleChange(e.target.value, 'width')}
                  />
                </div>
              </div>
              <div className={styles.downloadBtn}>
                <IconButton onClick={downloadSvg}>
                  <CloudDownloadOutlinedIcon sx={{ fontSize: 38 }} color='primary' />
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
            </div>
          </BrowserWindow>
        </div>
      </div>
      <SpeedDial
        ariaLabel="背景切换"
        sx={{ position: 'fixed', bottom: 50, right: 20 }}
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
  )
}
