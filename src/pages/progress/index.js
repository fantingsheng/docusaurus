import * as React from 'react';
import { useEffect, useState, forwardRef, useRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { Box, Typography, Slider, LinearProgress, TextField, Select, MenuItem, Switch, Button, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import styles from './style.module.scss';
import { ColorPicker } from 'material-ui-color';
import html2canvas from 'html2canvas'

const Tool = ({ config, handleConfigChange, doExportImg }) => {
  return (
    <Box sx={{ width: '280px' }}>
      <Typography variant="h5" sx={{ marginBottom: 4 }} gutterBottom>
        设置
      </Typography>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography sx={{  }} gutterBottom>
          标题
        </Typography>
        <TextField
          value={config.title}
          onChange={e => handleConfigChange(e.target.value, 'title')}
          placeholder='标题'
          size='small'
          fullWidth />
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography sx={{ }} gutterBottom>
          背景色
        </Typography>
        <ColorPicker
          value={config.bgColor}
          onChange={val => handleConfigChange(`#${val.hex}`, 'bgColor')} 
          fullWidth
        />
      </Box>
      <Box sx={{ marginBottom: '20px' }}>
        <Typography sx={{ }} gutterBottom>
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
      <Box sx={{ marginBottom: '20px' }}>
        <Typography sx={{ }} gutterBottom>
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
      <Box sx={{ '& > button': { width: '100%' } }}>
        <Button variant="contained" onClick={doExportImg} disableElevation>导出图片</Button>
      </Box>
    </Box>
  )
}

const Main = forwardRef(({ config }, ref) => {
  const desTime = new Date(2024, 0, 1, 7, 59);
  const fromTime = new Date(2023, 0, 1, 8);

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
          n + "天" + o + "时" + r + "分" + d + "秒" }
      </>
    )
  }

  useEffect(() => {
    const intervalId = setInterval(() => tick(), 100);
    return () => clearInterval(intervalId);
  }, [])

  return (
    <div ref={ref} className={styles.card} style={{ background: config.bgColor }}>
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
            <LinearProgress variant="determinate" value={Number(realPerct.replace('%', ''))} />
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
      <div>
        <a href="https://weibo.com/" target="_blank">spacexcode.com</a>
      </div>
    </div>
  )
})

export default function () {
  const progressBarRef = useRef();
  const [config, setConfig] = useState({
    title: '2023 年度进度显示',
    bgColor: 'linear-gradient(-44deg, #262626 0%, #4b4b4b 100%)',
    progressBarType: 'default',
    format: ':'
  });

  const handleConfigChange = (val, key) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  }

  const exportImg = () => {
    console.log("download")
    if (!progressBarRef.current) return;
    html2canvas(progressBarRef.current, {
      useCORS: true,
      scale: 2,
      backgroundColor: 'transparent'
    }).then((canvas) => {
      let newImg = new Image()
      const date = new Date()
      newImg.src = canvas.toDataURL('image/png')
      const a = document.createElement("a");
      a.style.display = "none";
      a.href = newImg.src;
      a.download = `spacexcode-glass-${date.getMinutes()}${date.getSeconds()}.png`;
      a.rel = "noopener noreferrer";
      document.body.append(a);
      a.click();
      setTimeout(() => {
          a.remove();
      }, 1000);
    })
  }
  return (
    <Layout
      title='年度进度显示'
      description='此工具生成测算距离某个日期还有多久'
    >
    <Head>
      <meta name="keywords" content='多久, 进度, 年底' />
    </Head>
      <div className={styles.main}>
        <div className={styles.left}>
          <Tool config={config} handleConfigChange={handleConfigChange} doExportImg={exportImg} />
        </div>
        <div className={styles.right}>
          <Main ref={progressBarRef} config={config} />
        </div>
      </div>
    </Layout>
  )
}