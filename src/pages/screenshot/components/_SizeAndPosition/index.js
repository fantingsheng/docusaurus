import { Slider, Stack, Box, Typography } from '@mui/material';
import { useState } from 'react';
import styles from './style.module.scss';
import { useConfigContext } from '../../_configProvider';
import clsx from 'clsx';

export default function SizeAndPosition() {
  const { config, handleConfigChange } = useConfigContext();

  const onValueChange = (newVal) => {
    handleConfigChange(newVal, "scale");
  }

  const onChangePos = (x, y) => {
    handleConfigChange(x, "translateX");
    handleConfigChange(y, "translateY");
  };

  return (
    <>
      <Stack spacing={2} direction="row" sx={{ }} alignItems="center">
        <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>Size</Typography>
        <Slider
          value={config.scale}
          aria-label='Radius'
          valueLabelDisplay="auto"
          min={0.5}
          step={0.01}
          max={1.5}
          onChange={(e, val) => onValueChange(val)}
        />
        <Typography variant="caption" sx={{ color: 'rgba(0, 0, 0, 0.56)' }}>{config.scale}</Typography>
      </Stack>
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