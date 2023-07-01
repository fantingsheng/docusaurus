import React from 'react';
import clsx from 'clsx';
import { useState } from 'react';
import Layout from '@theme/Layout';
import CodeBlock from '@theme/CodeBlock';
import { SpeedDialIcon, FormControl, Avatar, SpeedDial, SpeedDialAction, Grid, Item, Select, MenuItem, Button, Switch, Slider, Card, CardContent } from '@mui/material';
import { ColorPicker } from 'material-ui-color';
import styles from './style.module.css';
import { shapePathMap, shapeOptions } from './data';
import Banner from './banner'

export default function () {

  function Form () {
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
    const [bg, setBg] = useState('/page/shapedivider-1.jpg');
    const [mapKey, setMapKey] = useState('waves');

    const actions = [
      { icon: '/page/shapedivider-1.jpg', name: 'Bg1' },
      { icon: '/page/shapedivider-2.jpg', name: 'Bg2' }
    ];

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
        if (['waves', 'curve', 'curve-asymmetrical', 'triangle', 'triangle-asymmetrical', 'arrow', 'split', 'book'].includes(formData.shape) && val === true) {
          setMapKey(formData.shape + '-invert');
        } else {
          setMapKey(formData.shape)
        }
      }
    }

    return (
      <div className='container padding-bottom--lg'>
        <div className='row'>
          <div className='col col--8 col--offset-2'>
            <Card variant="outlined" className={styles.formWrap}>
              <CardContent>
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
                    <div style={{ display: 'flex' }}><ColorPicker value={formData.color} onChange={val => handleChange(val, 'color')} fullWidth /></div>
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
                      aria-label="Default"
                      min={0}
                      max={500}
                      valueLabelDisplay="auto"
                      onChange={e => handleChange(e.target.value, 'height')}
                      />
                  </div>
                  <div className='col col--6 margin-top--md'>
                    <div className={styles.label}>宽度（%）</div>
                    <Slider
                      value={formData.width}
                      aria-label="Default"
                      min={100}
                      max={300}
                      valueLabelDisplay="auto"
                      onChange={e => handleChange(e.target.value, 'width')}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
        <div className='row margin-top--lg'>
          <div className='col col--12'>
            <div className={styles.previewWrap}>
              <img src='/page/browser.png' />
              <div className={styles.previewArea}>
                <img src={bg} />
                <div
                  className={styles.shapeDivider}
                  style={{transform: formData.invert ? 'rotate(180deg)' : 'none'}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" 
                    preserveAspectRatio="none" 
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
            </div>
          </div>
        </div>
        <SpeedDial
          ariaLabel="背景切换"
          sx={{ position: 'fixed', bottom: 50, right: 20 }}
          icon={<SpeedDialIcon />}
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={<Avatar src={action.icon} />}
              tooltipTitle={action.name}
              onClick={() => setBg(action.icon)}
            />
          ))}
        </SpeedDial>
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
