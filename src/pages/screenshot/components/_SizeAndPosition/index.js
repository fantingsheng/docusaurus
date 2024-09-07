import { Slider, Stack, Box, Typography } from '@mui/material';
import { useState } from 'react';
import styles from './style.module.scss';
import { useConfigContext } from '../../_configProvider';
import RangeSlider from "@site/src/components/RangeSlider";
import clsx from 'clsx';

export default function SizeAndPosition() {
  const { config, handleConfigChange } = useConfigContext();

  const onChangePos = (x, y) => {
    handleConfigChange(x, "translateX");
    handleConfigChange(y, "translateY");
  };

  return (
    <>
      <RangeSlider
        minVal={0.5}
        maxVal={1.5}
        step={0.01}
        value={config.scale}
        label='Size'
        onValueChange={val => handleConfigChange(val, "scale")}
      />
      {/* <Stack spacing={2} direction="row" sx={{ }} alignItems="center">
        <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>Size</Typography>
        <Slider
          value={config.scale}
          aria-label='Radius'
          valueLabelDisplay="auto"
          min={0.5}
          step={0.01}
          max={1.5}
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
          onChange={(e, val) => onValueChange(val)}
        />
        <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>{config.scale}</Typography>
      </Stack> */}
      <Box className={styles.posGrid}>
        {[-50, -25, 0, 25, 50].map(row => (
          <Box className={styles.presetCol} key={row}>
            {[-50, -25, 0, 25, 50].map(el => (
              <Box
                className={clsx(styles.presetBtn, config.translateX === row && config.translateY === el ? styles.active : '')}
                key={el}
                onClick={() => onChangePos(row, el)}
              >
                <Box className={styles.tile}></Box>
              </Box>
            ))}
          </Box>
        ))}
      </Box>
    </>
  )
}