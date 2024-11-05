import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import { useState, useRef } from 'react';
import styles from './style.module.scss';
import { Grid, FormControlLabel, Switch, ToggleButtonGroup, ToggleButton, Box, Typography, Slider } from '@mui/material';
import CodeBlock from '@theme/CodeBlock';
import ColorPicker from '@site/src/components/ColorPicker';
import clsx from 'clsx';

function CodeBlockBox({ cssObj }) {

  const objToStyle = style => {
    let codeStr = '{\n';
    codeStr += Object.entries(style).map(([k, v]) => `  ${k.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^webkit/g, "-webkit")}: ${v}`).join(';\n');
    return codeStr + ';\n}'
  };

  return (
    <Box>
      <CodeBlock title='' language="css">
        { objToStyle(cssObj) }
      </CodeBlock>
    </Box>
  )
}

function ConfigForm({ config, handleConfigChange }) {

  const colorOptions = [
    '#cbd5e1', '#ff924c', '#a0c4ff', '#ff595e', '#3fc95d', '#409EFF', '#909399', '#212529'
  ];

  const onChangeType = (val) => {
    handleConfigChange(val, 'type');
    handleConfigChange("#8d8b8b", 'lineColor')
  }

  return (
    <>
      <ToggleButtonGroup
        value={config.type}
        exclusive
        onChange={(e, val) => onChangeType(val)}
        aria-label="网格类型"
        size="small"
        fullWidth
      >
        <ToggleButton value="grid" aria-label="网格" sx={{ padding: '4px 6px' }}>
          <Box className={clsx(styles.bgIcon, styles.gridBg)} />
        </ToggleButton>
        <ToggleButton value="dot" aria-label="点阵" sx={{ padding: '4px' }}>
          <Box className={clsx(styles.bgIcon, styles.dotBg)} />
        </ToggleButton>
        <ToggleButton value="block" aria-label="方块" sx={{ padding: '4px' }}>
          <Box className={clsx(styles.bgIcon, styles.blockBg)} />
        </ToggleButton>
      </ToggleButtonGroup>
      {config.type !== 'block' &&
      <Box className={styles.setItem} sx={{ marginTop: '15px' }}>
        <Typography variant="h5">线条宽度</Typography>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Typography variant="caption">1px</Typography>
          </Grid>
          <Grid item xs sx={{ display: 'flex' }}>
            <Slider
              value={config.lineWidth}
              aria-label='Default'
              min={1}
              step={1}
              max={10}
              size='small'
              valueLabelDisplay='auto'
              onChange={e => handleConfigChange(e.target.value, 'lineWidth')}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption">10px</Typography>
          </Grid>
        </Grid>
      </Box>
      }
      <Box className={styles.setItem}>
        <Typography variant="h5">网格大小</Typography>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <Typography variant="caption">{config.type === 'block' ? 2 : 1}px</Typography>
          </Grid>
          <Grid item xs sx={{ display: 'flex' }}>
            <Slider
              value={config.size}
              aria-label='Default'
              min={config.type === 'block' ? 2 : 1}
              step={config.type === 'block' ? 2 : 1}
              max={100}
              size='small'
              valueLabelDisplay='auto'
              onChange={e => handleConfigChange(e.target.value, 'size')}
            />
          </Grid>
          <Grid item>
            <Typography variant="caption">100px</Typography>
          </Grid>
        </Grid>
      </Box>
      <Box className={styles.setItem}>
        <Typography variant="h5">线条颜色</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginTop: '10px' }}>
          {colorOptions.map((el, index) => (
            <div
              className={clsx(styles.colorBox, config.lineColor === el ? styles.on : '')}
              style={{ backgroundColor: el }}
              onClick={() => handleConfigChange(el, 'lineColor')}
              key={index}
            />
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '7px', marginTop: '5px' }}>
          <ColorPicker
            defaultColor={config.lineColor}
            onChange={(color) => handleConfigChange(color, 'lineColor')}
          />
        </Box>
      </Box>
      <Box className={styles.setItem}>
        <Typography variant="h5">是否显示边缘遮罩</Typography>
        <FormControlLabel
          defaultChecked
          control={
            <Switch
              checked={config.hasCover}
              onChange={e => handleConfigChange(e.target.checked, 'hasCover')}
              inputProps={{ 'aria-label': 'controlled' }}
            />
          }
          className={styles.sizeInput}
        />
      </Box>
      {config.hasCover && 
        <Box className={styles.setItem}>
          <Typography variant="h5">渐变半径</Typography>
          <Grid container spacing={1} alignItems="center">
            <Grid item>
              <Typography variant="caption">10px</Typography>
            </Grid>
            <Grid item xs sx={{ display: 'flex' }}>
              <Slider
                value={config.gradientLen}
                aria-label='Default'
                min={10}
                step={1}
                max={200}
                size='small'
                valueLabelDisplay='auto'
                onChange={e => handleConfigChange(e.target.value, 'gradientLen')}
              />
            </Grid>
            <Grid item>
              <Typography variant="caption">200px</Typography>
            </Grid>
          </Grid>
        </Box>
      }
    </>
  )
}

export function CssGrid({ normal }) {
  const [config, setConfig] = useState({
    type: 'grid',
    lineColor: '#cbd5e1',
    lineWidth: 1,
    size: 20,
    hasCover: true,
    gradientLen: 50
  });

  const handleConfigChange = (val, key) => {
    setConfig((prev) => ({ ...prev, [key]: val }));
  };

  const gridStyle = () => {
    return Object.assign({
      backgroundSize: `${config.size}px ${config.size}px`,
      backgroundPosition: 'center center',
    },
    config.type === 'grid' ? {
      backgroundImage: `
    linear-gradient(to right, ${config.lineColor} ${config.lineWidth}px, transparent ${config.lineWidth}px),
    linear-gradient(to bottom, ${config.lineColor} ${config.lineWidth}px, transparent ${config.lineWidth}px)`
    } : config.type === 'dot' ? {
      backgroundImage: `radial-gradient(circle, ${config.lineColor} ${config.lineWidth}px, #fff ${config.lineWidth}px)`
    } : {
      backgroundImage: `
    linear-gradient(45deg, ${config.lineColor} 25%, transparent 0),
    linear-gradient(-45deg, ${config.lineColor} 25%, transparent 0),
    linear-gradient(45deg, transparent 75%, ${config.lineColor} 0),
    linear-gradient(-45deg, transparent 75%, ${config.lineColor} 0)`,
      backgroundPosition: `0 0, 0 ${config.size/2}px, ${config.size/2}px -${config.size/2}px, -${config.size/2}px 0`
    },
    config.hasCover ? {
      webkitMaskImage: `
    linear-gradient(to bottom, transparent, #fff ${config.gradientLen}px calc(100% - ${config.gradientLen}px), transparent),
    linear-gradient(to right, transparent, #fff ${config.gradientLen}px calc(100% - ${config.gradientLen}px), transparent)`,
      maskImage: `
    linear-gradient(to bottom, transparent, #fff ${config.gradientLen}px calc(100% - ${config.gradientLen}px), transparent),
    linear-gradient(to right, transparent, #fff ${config.gradientLen}px calc(100% - ${config.gradientLen}px), transparent)`,
      maskComposite: 'intersect',
      webkitMaskComposite: 'source-in, xor'
    } : {});
  }

  return (
    <Box sx={{ padding: '40px 0' }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Box className={styles.card} sx={{ padding: '20px' }}>
            <div className={styles.preview}>
              <div className={styles.cssGrid} style={gridStyle()} />
            </div>
          </Box>
          <Box className={styles.card} sx={{ padding: '20px 20px 5px', marginTop: '24px' }}>
            <CodeBlockBox cssObj={gridStyle()} />
          </Box>
        </Grid>
        {/* 配置 */}
        <Grid item xs={12} md={4}>
          <Box className={styles.card} sx={{ padding: '20px 20px 30px' }}>
            <ConfigForm config={config} handleConfigChange={handleConfigChange} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}

export default function Main() {
  return (
    <Layout title='CSS 网格代码生成器' description='一款通过配置生成网格背景的CSS代码的工具'>
      <Head>
        <meta name="keywords" content='网格,线性渐变,动态演示,CSS教程' />
      </Head>
      <div className={styles.page}>
        <div className="container">
          <CssGrid />
        </div>
      </div>
    </Layout>
  )
}
