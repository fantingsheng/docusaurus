import * as React from 'react';
import { useState, useRef, forwardRef } from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import styles from './style.module.scss';
import { Box, Typography, Slider, Switch, Button, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CodeBlock from '@theme/CodeBlock';
import html2canvas from 'html2canvas'

export const Main =  forwardRef(({ cssObj }, ref) => {
  return (
    <>
      <div className={styles.circleBig}></div>
      <div ref={ref} className={styles.glassBox} style={cssObj}></div>
      <div className={styles.circleSmall}></div>
    </>
  );
});

export function Tool ({ config, cssObj, handleFormChange, doExportImg }) {
  const [open, setOpen] = useState(false);

  const handleCodeBtn = () => {
    setOpen(true);
  }

  const objToStyle = style => {
    let codeStr = '{\n';
    codeStr += Object.entries(style).map(([k, v]) => `  ${k}: ${v}`).join(';\n');
    return codeStr + ';\n}'
  };

  return (
    <>
      <Box sx={{ width: '280px' }}>
        <Typography variant="h5" sx={{ color: 'lightgrey', marginBottom: 4 }} gutterBottom>
          设置
        </Typography>
        <Box sx={{ marginBottom: '20px' }}>
          <Typography sx={{ color: 'lightgrey' }} gutterBottom>
            盒子长度
          </Typography>
          <Slider
            value={config.width}
            min={200}
            max={800}
            onChange={e => handleFormChange(e.target.value, 'width')}
            valueLabelDisplay="auto"
            aria-labelledby="width"
          />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <Typography sx={{ color: 'lightgrey' }} gutterBottom>
            圆角半径
          </Typography>
          <Slider
            value={config.radius}
            min={0}
            max={40}
            onChange={e => handleFormChange(e.target.value, 'radius')}
            valueLabelDisplay="auto"
            aria-labelledby="width"
          />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <Typography sx={{ color: 'lightgrey' }} gutterBottom>
            背景模糊度
          </Typography>
          <Slider
            value={config.blur}
            min={0}
            max={20}
            step={1}
            onChange={e => handleFormChange(e.target.value, 'blur')}
            valueLabelDisplay="auto"
            aria-labelledby="width"
          />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <Typography sx={{ color: 'lightgrey' }} gutterBottom>
            透明度
          </Typography>
          <Slider
            value={config.opacity}
            min={0}
            max={1}
            step={0.01}
            onChange={e => handleFormChange(e.target.value, 'opacity')}
            valueLabelDisplay="auto"
            aria-labelledby="width"
          />
        </Box>
        <Box sx={{ marginBottom: '10px' }}>
          <Typography sx={{ color: 'lightgrey' }} gutterBottom>
            显示边框
          </Typography>
          <Switch
            value={config.hasBorder}
            inputProps={{ ariaLabel: 'Switch demo' }}
            onChange={e => handleFormChange(e.target.checked, 'hasBorder')}
          />
        </Box>
        <Box sx={{ '& > button': { marginRight: 2 } }}>
          <Button variant="contained" onClick={handleCodeBtn}>查看代码</Button>
          <Button variant="contained" onClick={doExportImg}>导出图片</Button>
        </Box>
      </Box>
      <Dialog open={open} maxWidth='lg'>
        <DialogTitle>代码</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={() => setOpen(false)}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Box sx={{ width: '500px' }}>
            <CodeBlock
              title=''
              language="css"
            >
              { objToStyle(cssObj) }
            </CodeBlock>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function () {
  const glassRef = useRef();
  const [config, setConfig] = useState({
    width: 420,
    radius: 10,
    blur: 10,
    opacity: 0.15,
    hasBorder: true
  })

  const cssObj = {
    width: config.width + 'px',
    border: (config.hasBorder ? 1 : 0) + 'px solid #ffffff2e',
    backdropFilter: 'blur(' + config.blur + 'px)',
    background: 'hsla(0, 0%, 100%, ' + config.opacity + ')',
    boxShadow: '0 6px 15px 0 #8e8e8e30',
    borderRadius: config.radius + 'px'
  }

  const handleFormChange = (val, key) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  }

  const exportImg = () => {
    console.log("download")
    if (!glassRef.current) return;
    html2canvas(glassRef.current, {
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
      title='在线生成 CSS 毛玻璃效果'
      description='此工具可在线制作玻璃形态，通过实时预览背景模糊、不透明度、轮廓等等就可以制作玻璃样式的盒子'
    >
    <Head>
      <meta name="keywords" content='毛玻璃, 透明度, 模糊' />
    </Head>
      <div className={styles.main}>
        <div className={styles.left}>
          <Tool
            config={config}
            cssObj={cssObj}
            handleFormChange={handleFormChange}
            doExportImg={exportImg}
          />
        </div>
        <div className={styles.right}>
          <Main cssObj={cssObj} ref={glassRef} />
        </div>
      </div>
    </Layout>
  )
}