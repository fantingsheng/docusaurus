import clsx from 'clsx';
import React, { useState, useCallback, useEffect, useRef } from 'react';
import styles from './style.module.css';
import { debounce } from '@site/src/utils';
import { Switch, Slider, Box, MenuItem, Button, Select } from '@mui/material';
import AnimateLinear from '@site/src/components/AnimateLinear';
import { colorBgList, langList } from '@site/src/config/data/codeimage';
import hljs from '../../config/highlight';
import { toPng, toJpg, toBlob } from '@site/src/utils/image';
import { downloadByUrl } from '@site/src/utils';
import toast, { Toaster } from 'react-hot-toast';

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
  const [code, setCode] = useState(`import React from 'react';

  export default function useToggle(initialValue = false) {
    const [value, setValue] = React.useState(initialValue);
  
    const toggle = React.useCallback(() => {
      setValue(v => !v);
    }, []);
  
    return [value, toggle];
  }`)
  const [fileName, setFileName] = useState('');
  const [focus, setFocus] = useState(false);
  const [blockWidth, setBlockWidth] = useState('auto');
  const [handSide, setHandSide] = useState('left');
  const [clientX, setClientX] = useState(0)
  const [editorHeight, setEditorHeight] = useState(0);
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
    let width = 0;
    if (blockWidth > 0) {
      width = blockWidth;
    } else {
      width = imgCode.current.offsetWidth
    }
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

  useEffect(() => {
    if (codeRef.current) {
      console.log("codeRef.current.offsetHeight", codeRef.current.offsetHeight)
      setEditorHeight(codeRef.current.offsetHeight)
    }
  }, [codeRef.current])
  
  const handleSetting = (val, key) => {
    setSettings((prev) => ({ ...prev, [key]: val }))
  }

  const onInputChange = useCallback((e) => {
    console.log(e.target.scrollHeight)
    setCode(e.target.value);
    setEditorHeight(e.target.scrollHeight)
  }, [])
  
  const onExport = async () => {
    if (!imgCode.current) return;
    const dataUrl = await toPng(imgCode.current, {
      pixelRatio: 1
    });
    const date = new Date();
    const fileName = `spacexcode-codeimage-${date.getMinutes()}${date.getSeconds()}.png`;
    downloadByUrl(dataUrl, fileName);
  }

  const onCopy = async () => {
    if (!imgCode.current) return;
    const blob = await toBlob(imgCode.current, {
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
          toast.success('复制成功', {position: 'bottom-center'});
        },
        (err) => {
          console.error(err);
        }
      ).catch((err) => {
        console.error(err);
      })
  }
  return (
    <div className='container'>
      <div className='row'>
        <div className='col col--12'>
          <div className={styles.mainWrap}>
            <AnimateLinear pad='0' borderBg={settings.hasBg ? settings.theme : 'transparent'} overflow='visibility'>
              <div className={styles.resizeFrame}>
                <div className={clsx(styles.handDrag, styles.dragLeft)} onMouseDown={e => handleStartResize(e, 'left')}></div>
                <div className={clsx(styles.handDrag, styles.dragRight)} onMouseDown={e => handleStartResize(e, 'right')}></div>
                <div ref={imgCode} style={{ width: blockWidth < 1 ? 'auto' : blockWidth + 'px' }}>
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
                            onChange={onInputChange}
                          />
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
                <div className={styles.sizeReset}>
                  {blockWidth > 0 && <a className={styles.btn} onClick={() => setBlockWidth(0)}>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM6.28033 5.21967C5.98744 4.92678 5.51256 4.92678 5.21967 5.21967C4.92678 5.51256 4.92678 5.98744 5.21967 6.28033L6.93934 8L5.21967 9.71967C4.92678 10.0126 4.92678 10.4874 5.21967 10.7803C5.51256 11.0732 5.98744 11.0732 6.28033 10.7803L8 9.06066L9.71967 10.7803C10.0126 11.0732 10.4874 11.0732 10.7803 10.7803C11.0732 10.4874 11.0732 10.0126 10.7803 9.71967L9.06066 8L10.7803 6.28033C11.0732 5.98744 11.0732 5.51256 10.7803 5.21967C10.4874 4.92678 10.0126 4.92678 9.71967 5.21967L8 6.93934L6.28033 5.21967Z" fill="currentColor"></path></svg>
                    恢复自适应
                  </a>}
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
                  sx={{  }}
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
                    marks={[{value: 16, label: '16'}, {value: 32, label: '32'}, {value: 64, label: '64'}, {value: 128, label: '128'}]}
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
                <Button variant='contained' onClick={onExport} fullWidth>导出图片</Button>
                <Button variant='contained' onClick={onCopy} fullWidth>复制</Button>
              </div>
            </div>
            <Toaster />
          </div>
        </div>
      </div>
    </div>
  )
}
