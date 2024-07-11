import styles from "./style.module.scss";
import { Box, Typography } from '@mui/material';

import BorderRadius from "../BorderRadius";
import BoxShadow from "../BoxShadow";
import SizeAndPosition from "../SizeAndPosition";

export default function MockupTab({ config, handleConfigChange }) {
  return (
    <div className={styles.setPannel}>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3">样式</Typography>
      </Box>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3">圆角</Typography>
        <BorderRadius config={config} handleConfigChange={handleConfigChange} />
      </Box>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3">阴影</Typography>
        <BoxShadow shadow={config.borderRadius} handleConfigChange={handleConfigChange} />
      </Box>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3">大小和位置</Typography>
        <SizeAndPosition config={config} handleConfigChange={handleConfigChange} />
      </Box>
    </div>
  )
}
