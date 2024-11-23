import * as React from 'react';
import { useEffect, useState, forwardRef, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { Box, Typography, LinearProgress, TextField, Select, MenuItem, Button } from '@mui/material';
import styles from './style.module.scss';
import ColorPicker from '@site/src/components/ColorPicker';
import { toPng } from '@site/src/utils/image';
import { downloadByUrl } from '@site/src/utils';

const Tool = ({ config, handleConfigChange, doExportImg }) => {
  return (
    <Box sx={{ 
      width: 'fit-content',
      margin: '120px auto',
      boxShadow: '0 1px 2px 1px #0000001a',
      display: 'flex',
      gap: '30px',
      borderRadius: '8px',
      padding: '25px 20px',
      justifyContent: 'center',
      alignItems: 'center'
     }}>
      <Box sx={{  }}>
        <Typography sx={{ color: 'grey', marginBottom: '15px' }} gutterBottom>
          标题
        </Typography>
        <TextField
          value={config.title}
          onChange={e => handleConfigChange(e.target.value, 'title')}
          placeholder='标题'
          size='small'
          fullWidth />
      </Box>
      <Box sx={{  }}>
        <Typography sx={{ color: 'grey', marginBottom: '15px' }} gutterBottom>
          时间格式
        </Typography>
        <Select
          value={config.format}
          onChange={val => handleConfigChange(val.target.value, 'format')}
          label=""
          size='small'
          fullWidth
        >
          <MenuItem value={':'}>DD : HH : mm : ss</MenuItem>
          <MenuItem value={'zh'}>DD天HH时mm分ss秒</MenuItem>
        </Select>
      </Box>
      <Box sx={{ width: '140px' }}>
        <Typography sx={{ color: 'grey', marginBottom: '15px' }} gutterBottom>
          进度条类型
        </Typography>
        <Select
          value={config.progressBarType}
          onChange={val => handleConfigChange(val.target.value, 'progressBarType')}
          label=""
          size='small'
          fullWidth
        >
          <MenuItem value='default'>默认</MenuItem>
          <MenuItem value='mui'>Material UI</MenuItem>
        </Select>
      </Box>
      <Box sx={{ width: '120px' }}>
        <Typography sx={{ color: 'grey', marginBottom: '15px'}} gutterBottom>
          背景色
        </Typography>
        <ColorPicker
          defaultColor={config.bgColor.includes('linear-gradient') ? '#262626' : config.bgColor}
          onChange={val => handleConfigChange(val, 'bgColor')} 
        />
      </Box>
      <Box sx={{ width: '100px', '& > button': { width: '100%' } }}>
        <Button variant="contained" onClick={doExportImg} disableElevation>导出图片</Button>
      </Box>
    </Box>
  )
}

export const Main = forwardRef(({ config, style }, ref) => {
  const year = new Date().getFullYear();
  const desTime = new Date(year + 1, 0, 1, 7, 59);
  const fromTime = new Date(year, 0, 1, 8);

  const [lstTime, setLstTime] = useState(0);
  const [percentage, setPercentage] = useState('');
  const [realPerct, setRealPerct] = useState('');

  const caclPert = () => {
    let pert = '';
    const p = (((new Date).getTime() - fromTime.getTime()) / (desTime.getTime() - fromTime.getTime()) * 100);
    if (p < 100) {
      pert = p >= 5 && p < 10 ?
        p.toFixed(0) : p >= 10 && p < 15 ?
        p.toFixed(1) : p >= 15 && p < 20 ?
        p.toFixed(3) : p >= 20 && p < 25 ?
        p.toFixed(5) : p.toFixed(6);
        
      setRealPerct(p + '%');
      setPercentage(pert + '%')
    }
  }

  const tick = () => {
    setLstTime(desTime.getTime() - (new Date).getTime());
    caclPert();
  }

  const prependZero = (e) => {
    return e < 10 ? "0" + e : e
  }

  const LstTimeFormat = ({ lstInt, config }) => {
    const n = prependZero(Math.floor(lstInt / 864e5))
      , o = prependZero(Math.floor(lstInt % 864e5 / 36e5))
      , r = prependZero(Math.floor(lstInt % 36e5 / 6e4))
      , d = prependZero(Math.floor(lstInt % 6e4 / 1e3));
    return (
      <>
        { config.format === ":" ?
          n + " : " + o + " : " + r + " : " + d :
          n + " 天 " + o + " 时 " + r + " 分 " + d + " 秒 " }
      </>
    )
  }

  useEffect(() => {
    const intervalId = setInterval(() => tick(), 100);
    return () => clearInterval(intervalId);
  }, [])

  return (
    <div ref={ref} className={styles.card} style={{ background: config.bgColor, ...style }}>
      <Typography variant="h4" sx={{ marginBottom: 4 }} gutterBottom>
        {config.title}
      </Typography>
      {
        config.progressBarType === 'default' ?
        <div className={styles.progress}>
          <div className={styles.progressBar} style={{ width: realPerct }}>{percentage}</div>
        </div>
        :
        config.progressBarType === 'mui' ?
        <Box sx={{ display: 'flex', width: '50%', alignItems: 'center' }}>
          <Box sx={{ width: '100%', mr: 1 }}>
            <LinearProgress sx={{ height: '50px' }} variant="determinate" value={Number(realPerct.replace('%', ''))} />
          </Box>
          <Box sx={{ minWidth: 100 }}>
            <Typography variant="body2" color="white">{percentage}</Typography>
          </Box>
        </Box>
        :
        <></>
      }
      <Typography variant="h6" sx={{ marginTop: 4 }} gutterBottom>
        <LstTimeFormat lstInt={lstTime} config={config} />
      </Typography>
      {
        config.copyright &&
        <div className={styles.domain}>
          <a href="https://spacexcode.com" target="_blank">www.spacexcode.com</a>
        </div>
      }
    </div>
  )
})

export default function () {
  const progressBarRef = useRef();
  const year = new Date().getFullYear();
  const [config, setConfig] = useState({
    title: `${year} 年度进度显示`,
    bgColor: 'linear-gradient(-44deg, #262626 0%, #4b4b4b 100%)',
    progressBarType: 'default',
    format: ':',
    copyright: true
  });

  const handleConfigChange = (val, key) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  }

  const exportImg = async () => {
    console.log("download")
    if (!progressBarRef.current) return;
    const dataUrl = await toPng(progressBarRef.current, {
      pixelRatio: 1
    });
    const date = new Date()
    const fileName = `spacexcode-yearprogress-${date.getMinutes()}${date.getSeconds()}.png`;
    downloadByUrl(dataUrl, fileName);
  }
  return (
    <Layout
      title='年度进度显示'
      description='实时显示当前年份的进度数据'
    >
      <Head>
        <meta name="keywords" content='进度条, 进度, 年度' />
      </Head>
      <div className='container'>
        <div className='row'>
          <div className='col col--8 col--offset-2'>
            <div style={{ marginTop: '120px' }}>
              <Main ref={progressBarRef} config={config} />
            </div>
          </div>
          <div className='col col--12'>
            <div className={styles.tool}>
              <Tool config={config} handleConfigChange={handleConfigChange} doExportImg={exportImg} />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}