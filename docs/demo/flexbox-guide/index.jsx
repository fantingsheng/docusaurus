import React, { useState } from 'react';
import styles from './style.module.scss';
import { Box, Button, TextField, Typography, Slider, RadioGroup, FormControlLabel, Radio } from "@mui/material"

export function Flexform () {
  const [width, setWidth] = useState(600)
  return (
    <div className={styles.flexWrapper}>
      <Box className={styles.setting}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <Typography variant="h5" sx={{ fontSize: '1rem' }}>盒子宽度：</Typography>
          <Typography variant="body1">{width}px</Typography>
        </Box>
        <Slider
          value={width}
          aria-label='Default'
          min={250}
          max={600}
          size='small'
          valueLabelDisplay='auto'
          onChange={e => setWidth(e.target.value)}
        />
      </Box>
      
      <Box className={styles.form} sx={{ width: width + 'px' }}>
        <Box className={styles.name}>
          <Typography variant="h5">姓名：</Typography>
          <TextField
            placeholder='Timfan'
            size='small'
            fullWidth
          />
        </Box>
        <Box className={styles.email}>
          <Typography variant="h5">邮箱：</Typography>
          <TextField
            placeholder='fants0230@gmail.com'
            size='small'
            fullWidth
          />
        </Box>
        <Box className={styles.button}>
          <Button variant="contained" fullWidth>提交</Button>
        </Box>
      </Box>
    </div>
  )
}


export function FlexBlock () {
  const [display, setDisplay] = useState('block')
  return (
    <div className={styles.flexWrapper}>  
      <Box className={styles.blockList} sx={{ display: display }}>
        <Box className={styles.block}>Welcome</Box>
        <Box className={styles.block}>to</Box>
        <Box className={styles.block}>Spacexcode</Box>
        <Box className={styles.block}>website</Box>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Typography variant="h5" sx={{ fontSize: '1rem' }}>布局方式：</Typography>
        <RadioGroup
          sx={{ display: 'flex', flexDirection: 'row' }}
          value={display}
          onChange={(e) => setDisplay(e.target.value)}
        >
          <FormControlLabel value="block" control={<Radio size="small" />} label="block" />
          <FormControlLabel value="flex" control={<Radio size="small" />} label="flex" />
        </RadioGroup>
      </Box>
    </div>
  )
}


