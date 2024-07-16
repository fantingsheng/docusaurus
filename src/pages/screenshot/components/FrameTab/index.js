import { useState, useContext } from "react";
import Background from "../Background";
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
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Typography variant="caption">Noise</Typography>
          <Slider
            aria-label="Noise"
            min={0}
            step={1}
            max={100}
            valueLabelDisplay='auto'
            value={config.noise}
            onChange={e => onNoiseChange(e.target.value)}
          />
          <Typography variant="caption">{config.noise}</Typography>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <Typography variant="caption">Blur</Typography>
          <Slider
            value={config.blur}
            aria-label='Blur'
            min={0}
            step={1}
            max={100}
            valueLabelDisplay='auto'
            onChange={e => onBlurChange(e.target.value)}
          />
          <Typography variant="caption">{config.blur}</Typography>
        </Stack>
        
      </Box>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h5">背景</Typography>
        <Background />
      </Box>
    </div>
  )
}
