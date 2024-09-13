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