import clsx from 'clsx';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import styles from './style.module.css';
import debounce from '../../theme/ReactLiveScope/debounce';
import { Switch, Slider, Box, MenuItem, Button, Select } from '@mui/material';
import AnimateLinear from '@site/src/components/AnimateLinear';
import { colorBgList, langList } from '@site/src/config/data/codeimage';
import hljs from '../../config/highlight';
import html2canvas from 'html2canvas'

export default function Main () {
  const codeRef = useRef(null);
  const imgCode = useRef(null);

  const maxWidth = 920;
  const minWidth = 520;

  const [settings, setSettings] = useState({
    darkMode: true,
    hasBg: true,
    theme: 'linear-gradient(140deg, rgb(207, 47, 152), rgb(106, 61, 236))',
    pad: 64,
    lang: 'javascript'
  })
  const [code, setCode] = useState(`function toObject (arr, key) {
  arr.reduce((a, b) => (
    { ...a, [b[key]]: b }
  ), {});
}`)
  const [fileName, setFileName] = useState('');
  const [focus, setFocus] = useState(false);
  const [blockWidth, setBlockWidth] = useState(680);
  const [handSide, setHandSide] = useState('left');
  const [clientX, setClientX] = useState(0)
  const [editorHeight, setEditorHeight] = useState(180);
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

  useEffect(() => {
    if (codeRef.current) {
      hljs.highlightElement(codeRef.current);
    }
  }, [code, settings.lang])
  
  const handleSetting = (val, key) => {
    setSettings((prev) => ({ ...prev, [key]: val }))
  }
  
  const exportImg = () => {
    if (!imgCode.current) return;
    html2canvas(imgCode.current, {
      useCORS: true,
      scale: 2,
      backgroundColor: 'transparent'
    }).then((canvas) => {
      const dataURL = canvas.toDataURL('image/png');
      let newImg = new Image()
      const date = new Date()
      newImg.src = canvas.toDataURL('image/png')
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = newImg.src;
      a.download = `spacexcode-${date.getMinutes()}${date.getSeconds()}.png`;
      a.rel = "noopener noreferrer";
      document.body.append(a);
      a.click();
      setTimeout(() => {
          a.remove();
      }, 1000);
    })
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col--12'>
          <div className={styles.mainWrap}>
            <AnimateLinear pad='0' borderBg={settings.hasBg ? settings.theme : 'transparent'}>
              <div className={styles.resizeFrame}>
                  <div className={clsx(styles.handDrag, styles.dragLeft)} onMouseDown={e => handleStartResize(e, 'left')}></div>
                  <div className={clsx(styles.handDrag, styles.dragRight)} onMouseDown={e => handleStartResize(e, 'right')}></div>
                  <div ref={imgCode} style={{ width: blockWidth ? blockWidth + 'px': 'auto'}}>
                    <div
                      className={styles.codeMain}
                      style={{
                        padding: `${settings.pad}px`,
                        backgroundImage: settings.hasBg ? settings.theme : ''
                      }}>
                        {
                          settings.hasBg ? "" : <div data-html2canvas-ignore={true} className={styles.frameNoBg}></div>
                        }
                        <div className={clsx(styles.frameWindow, {[styles.darkTheme]: settings.darkMode})}
                          style={{ background: settings.darkMode ? 'rgba(0, 0, 0, .75)' : 'hsla(0, 0%, 100%, 0.75)' }}>
                          <div className={styles.winHeader}>
                            <div className={styles.controller}>
                              <span></span>
                              <span></span>
                              <span></span>
                            </div>
                            <div className={styles.fileName}>
                              <input
                                type='text'
                                value={fileName}
                                onFocus={() => setFocus(true)}
                                onBlur={() => setFocus(false)}
                                onChange={(e) => setFileName(e.target.value)} />
                                {fileName || focus ? '' : <span>Untitled-1</span>}
                            </div>
                          </div>
                          <div className={styles.codeEditor}>
                            <textarea
                              className={styles.editorTextarea}
                              spellCheck={false}
                              autoComplete='off'
                              tabIndex={-1}
                              autoCorrect='off'
                              autoCapitalize='off'
                              value={code}
                              onChange={e => setCode(e.target.value)}
                              style={{ height: editorHeight + 'px' }}
                              onInput={e => setEditorHeight(e.target.scrollHeight)}>
                            </textarea>
                            <div
                              id={settings.lang}
                              ref={codeRef}
                              className={clsx(styles.codeFormatted, settings.lang)}
                              style={{ color: '#fefdfd', background: 'transparent' }}
                            >
                              {code}
                            </div>
                          </div>
                        </div>
                    </div>
                  </div>
              </div>
            </AnimateLinear>
            <div className={styles.setBar}>
              <div className={styles.setItem}>
                <div className={styles.label}>主题</div>
                <Select
                  value={settings.theme}
                  size='small'
                  onChange={e => handleSetting(e.target.value, 'theme')}
                >
                  {colorBgList.map(el => (
                    <MenuItem value={el.theme} key={el.name}>
                      <span className={styles.colorDot} style={{ backgroundImage: el.theme}}></span>{el.name}
                    </MenuItem>
                  ))}
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
                <Box sx={{ width: 250 }}>
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
                  {langList.map(el => (
                    <MenuItem value={el.key} key={el.key}>{el.name}</MenuItem>
                  ))}
                </Select>
              </div>
              <div className={styles.setItem}>
                <Button variant='contained' onClick={exportImg}>导出图片</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
