import clsx from 'clsx';
import React from 'react';
import { useState, useCallback, useEffect } from 'react';
import styles from './style.module.css';
import CodeBlock from '@theme/CodeBlock';
import debounce from '../../theme/ReactLiveScope/debounce';
import { Switch, Slider, Box, MenuItem, Button, Select } from '@mui/material';
import {useColorMode} from '@docusaurus/theme-common';

export default function Main () {
  const {colorMode, setColorMode} = useColorMode();
  useEffect(() => {
    setColorMode('dark')
  }, [])
  const maxWidth = 920;
  const minWidth = 520;
  const [code, setCode] = useState(`function Hello () {
  return "Welcome to Spacexcode";
}`);
  const [settings, setSettings] = useState({
    darkMode: true,
    hasBg: true,
    theme: 'linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))',
    pad: 64,
    lang: 'js'
  })
  const [blockWidth, setBlockWidth] = useState(520);
  const [handSide, setHandSide] = useState('left');
  const [clientX, setClientX] = useState(0)
  // 是否在拖动
  const [isResizing, setIsResizing] = useState(false)
  const handleStartResize = useCallback((e, side) => {
    setHandSide(side)
    setIsResizing(true)
    setClientX(e.clientX)
  }, [])
  const handleStopResize = useCallback(() => {
    setIsResizing(false);
  }, [])

  const didHandleResize = debounce(e => {
    if (!isResizing) return
    const offset = e.clientX - clientX;
    let width = blockWidth
    if (handSide === 'left') {
      width -= offset
    }
    if (handSide === 'right') {
      width += offset
    }
    if (width > maxWidth) width = maxWidth;
    if (width < minWidth) width = minWidth;
    setClientX(e.clientX);
    console.log(offset);
    setBlockWidth(width);
  }, 0)

  const handleResize = useCallback(didHandleResize, [isResizing, clientX, didHandleResize])
  useEffect(() => {
    document.addEventListener('mouseup', handleStopResize)
    document.addEventListener('mousemove', handleResize)
    return () => {
      document.removeEventListener('mouseup', handleStopResize)
      document.removeEventListener('mousemove', handleResize)
    }
  }, [handleStopResize, handleResize])
  const handleSetting = (val, key) => {
    setSettings((prev) => ({ ...prev, [key]: val }))
  }
  
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col--12'>
          <div className={styles.mainWrap}>
            <div
              className={styles.resizeFrame}>
                <div className={clsx(styles.handDrag, styles.dragLeft)} onMouseDown={e => handleStartResize(e, 'left')}></div>
                <div className={clsx(styles.handDrag, styles.dragRight)} onMouseDown={e => handleStartResize(e, 'right')}></div>
                <div style={{ width: blockWidth ? blockWidth + 'px': 'auto'}}>
                  <div
                    className={styles.codeMain}
                    style={{
                      padding: `${settings.pad}px`,
                      backgroundImage: settings.hasBg ? settings.theme : ''
                    }}>
                      <div className={styles.frameNoBg}></div>
                      <div className={clsx(styles.frameWindow, {[styles.darkTheme]: settings.darkMode})}
                        style={{ background: settings.darkMode ? 'rgba(0, 0, 0, 0.75)' : 'hsla(0, 0%, 100%, 0.75)' }}>
                        <div className={styles.winHeader}>
                          <div className={styles.controller}>
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                          <div className={styles.fileName}>
                            <input type='text' value='' onChange={() => {}}></input>
                            <span>Untitled-1</span>
                          </div>
                        </div>
                        <div className={styles.codeArea}>
                          <CodeBlock
                            className={styles.codeEditor}
                            language={settings.lang}>
                            {code}
                          </CodeBlock>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
            <div className={styles.setBar}>
              <div className={styles.setItem}>
                <div className={styles.label}>主题</div>
                <Select value={settings.theme} size='small' onChange={e => handleSetting(e.target.value, 'theme')}>
                  <MenuItem value='linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))'>Breeze</MenuItem>
                  <MenuItem value='linear-gradient(140deg, rgb(165, 142, 251), rgb(233, 191, 248))'>Candy</MenuItem>
                </Select>
              </div>
              <div className={styles.setItem}>
                <div className={styles.label}>背景</div>
                <Switch size='default'
                  value={settings.hasBg}
                  inputProps={{ 'aria-label': 'Switch demo'}}
                  onChange={e => handleSetting(e.target.checked, 'hasBg')}
                  defaultChecked />
              </div>
              <div className={styles.setItem}>
                <div className={styles.label}>暗黑模式</div>
                <Switch size='default'
                  value={settings.darkMode}
                  inputProps={{ 'aria-label': 'Switch demo'}}
                  onChange={e => handleSetting(e.target.checked, 'darkMode')}
                  defaultChecked />
              </div>
              <div className={styles.setItem}>
                <div className={styles.label}>内边距</div>
                <Box sx={{ width: 300 }}>
                  <Slider
                    aria-label='内边距'
                    value={settings.pad}
                    onChange={e => handleSetting(e.target.value, 'pad')}
                    getAriaValueText={val => `${val}px`}
                    valueLabelDisplay="auto"
                    step={16}
                    marks={[{value: 16, label: '16px'}, {value: 32, label: '32px'}, {value: 64, label: '64px'}, {value: 128, label: '128px'}]}
                    min={16}
                    max={128}
                  />
                </Box>
              </div>
              <div className={styles.setItem}>
                <div className={styles.label}>语言</div>
                <Select size='small' value={settings.lang} onChange={e => handleSetting(e.target.value, 'lang')}>
                  <MenuItem value='js'>JavaScript</MenuItem>
                  <MenuItem value='java'>Java</MenuItem>
                </Select>
              </div>
              <div className={styles.setItem}>
                <Button variant='contained'>导出图片</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
