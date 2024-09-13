import { useState, useContext } from "react";
import Background from "../_Background";
import { Box, Typography } from '@mui/material';
import RangeSlider from "@site/src/components/RangeSlider";

import styles from "./style.module.scss";
import { useConfigContext } from '../../_configProvider';

export default function Frame() {
  const { config, handleConfigChange } = useConfigContext();

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
        <Box sx={{ marginTop: '-20px' }}>
          <RangeSlider
            minVal={0}
            maxVal={100}
            step={1}
            value={config.blur}
            label='Blur'
            onValueChange={val => handleConfigChange(val, "blur")}
          />
        </Box>
      </Box>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h5">背景</Typography>
        <Background />
      </Box>
    </div>
  )
}
