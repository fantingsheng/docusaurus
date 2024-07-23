import { useState, useContext } from "react";
import Background from "../_Background";
import { Box, Typography, Slider, Stack } from '@mui/material';
import styles from "./style.module.scss";
import { useConfigContext } from '../../_configProvider';

export default function Frame() {
  const { config, handleConfigChange } = useConfigContext();

  const onNoiseChange = (val) => {
    handleConfigChange(val, "noise")
  }

  const onBlurChange = (val) => {
    handleConfigChange(val, "blur")
  }
  return (
    <div className={styles.setPannel}>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h5">效果</Typography>
        <Stack spacing={2} direction="row" sx={{  }} alignItems="center">
          <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>Noise</Typography>
          <Slider
            aria-label="Noise"
            min={0}
            step={1}
            max={100}
            valueLabelDisplay='auto'
            value={config.noise}
            onChange={e => onNoiseChange(e.target.value)}
          />
          <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>{config.noise}</Typography>
        </Stack>
        <Stack spacing={2} direction="row" sx={{  }} alignItems="center">
          <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>Blur</Typography>
          <Slider
            value={config.blur}
            aria-label='Blur'
            min={0}
            step={1}
            max={100}
            valueLabelDisplay='auto'
            onChange={e => onBlurChange(e.target.value)}
          />
          <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>{config.blur}</Typography>
        </Stack>
        
      </Box>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h5">背景</Typography>
        <Background />
      </Box>
    </div>
  )
}
