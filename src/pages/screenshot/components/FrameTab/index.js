import { useState } from "react";
import ViewerSelect from "../ViewerSelect";
import Background from "../Background";
import { Box, Typography, Slider, Stack } from '@mui/material';
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
      <ViewerSelect config={config} handleConfigChange={handleConfigChange} openStyle="frame" />
      <div className={styles.scrollView}>
        <Box className={styles.pannelCtrl}>
          <Typography className={styles.setTit} variant="h5">效果</Typography>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Typography>Noise</Typography>
            <Slider
              aria-label="Noise"
              min={0}
              step={1}
              max={100}
              valueLabelDisplay='auto'
              value={noiseVal}
              onChange={e => setNoiseVal(e.target.value)}
            />
            <Typography>{noiseVal}</Typography>
          </Stack>
          <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
            <Typography>Blur</Typography>
            <Slider
              value={blurVal}
              aria-label='Blur'
              min={0}
              step={1}
              max={100}
              valueLabelDisplay='auto'
              onChange={e => setBlurVal(e.target.value)}
            />
            <Typography>{blurVal}</Typography>
          </Stack>
          
        </Box>
        <Box className={styles.pannelCtrl}>
          <Typography className={styles.setTit} variant="h5">背景</Typography>
          <Background config={config} handleConfigChange={handleConfigChange} />
        </Box>
      </div>
    </div>
  )
}
