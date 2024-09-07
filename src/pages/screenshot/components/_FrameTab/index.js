import { useState, useContext } from "react";
import Background from "../_Background";
import { Box, Typography, Slider, Stack } from '@mui/material';
import RangeSlider from "@site/src/components/RangeSlider";

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
        <RangeSlider
          minVal={0}
          maxVal={100}
          step={1}
          value={config.noise}
          label='Noise'
          onValueChange={val => handleConfigChange(val, "noise")}
        />
        <RangeSlider
          minVal={0}
          maxVal={100}
          step={1}
          value={config.blur}
          label='Blur'
          onValueChange={val => handleConfigChange(val, "blur")}
        />
        {/* <Stack spacing={2} direction="row" sx={{  }} alignItems="center">
          <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>Noise</Typography>
          <Slider
            aria-label="Noise"
            valueLabelDisplay="auto"
            min={0}
            step={1}
            max={100}
            value={config.noise}
            sx={{
              '& .MuiSlider-thumb': {
                backgroundColor: '#fff',
                border: '2px solid currentColor',
              },
              '& .MuiSlider-valueLabel': {
                lineHeight: 1.2,
                fontSize: 12,
                background: 'unset',
                padding: 0,
                width: 32,
                height: 32,
                borderRadius: '50% 50% 50% 0',
                backgroundColor: 'var(--ifm-color-primary)',
                transformOrigin: 'bottom left',
                transform: 'translate(50%, -85%) rotate(-45deg) scale(0)',
                '&::before': { display: 'none' },
                '&.MuiSlider-valueLabelOpen': {
                  transform: 'translate(50%, -85%) rotate(-45deg) scale(1)',
                },
                '& > *': {
                  transform: 'rotate(45deg)',
                },
              }
            }}
            onChange={e => onNoiseChange(e.target.value)}
          />
          <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>{config.noise}</Typography>
        </Stack> */}
        {/* <Stack spacing={2} direction="row" sx={{  }} alignItems="center">
          <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>Blur</Typography>
          <Slider
            value={config.blur}
            aria-label='Blur'
            min={0}
            step={1}
            max={100}
            valueLabelDisplay='auto'
            sx={{
              '& .MuiSlider-thumb': {
                backgroundColor: '#fff',
                border: '2px solid currentColor',
              },
              '& .MuiSlider-valueLabel': {
                lineHeight: 1.2,
                fontSize: 12,
                background: 'unset',
                padding: 0,
                width: 32,
                height: 32,
                borderRadius: '50% 50% 50% 0',
                backgroundColor: 'var(--ifm-color-primary)',
                transformOrigin: 'bottom left',
                transform: 'translate(50%, -85%) rotate(-45deg) scale(0)',
                '&::before': { display: 'none' },
                '&.MuiSlider-valueLabelOpen': {
                  transform: 'translate(50%, -85%) rotate(-45deg) scale(1)',
                },
                '& > *': {
                  transform: 'rotate(45deg)',
                },
              }
            }}
            onChange={e => onBlurChange(e.target.value)}
          />
          <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>{config.blur}</Typography>
        </Stack> */}
      </Box>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h5">背景</Typography>
        <Background />
      </Box>
    </div>
  )
}
