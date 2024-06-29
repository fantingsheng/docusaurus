import { useState } from "react";
import ViewerSelect from "../ViewerSelect";
import Background from "../Background";
import { Box, Typography, Slider } from '@mui/material';
import styles from "./style.module.scss";

export default function Frame({ config, handleConfigChange }) {
  const [noiseVal, setNoiseVal] = useState(config.noise);
  const [blurVal, setBlurVal] = useState(config.blur);

  const onNoiseChange = (val) => {
    setNoiseVal(val);
    handleConfigChange(val, "noise")
  }

  const onBlurChange = (val) => {
    setBlurVal(val);
    handleConfigChange(val, "blur")
  }
  return (
    <div className={styles.tab}>
      <ViewerSelect />
      <div className={styles.scrollView}>
        <Box className={styles.pannelCtrl}>
          <Typography className={styles.setTit} variant="h5">效果</Typography>
          <Slider
            value={noiseVal}
            aria-label='Noise'
            min={0}
            step={1}
            max={100}
            size='small'
            valueLabelDisplay='auto'
            onChange={e => onNoiseChange(e.target.value)}
          />
          <Slider
            value={blurVal}
            aria-label='Blur'
            min={0}
            step={1}
            max={100}
            size='small'
            valueLabelDisplay='auto'
            onChange={e => onBlurChange(e.target.value)}
          />
        </Box>
        <Box className={styles.pannelCtrl}>
          <Typography className={styles.setTit} variant="h5">背景</Typography>
          <Background config={config} handleConfigChange={handleConfigChange} />
        </Box>
      </div>
    </div>
  )
}
