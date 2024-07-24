import styles from "./style.module.scss";
import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import BorderRadius from "../_BorderRadius";
import BoxShadow from "../_BoxShadow";
import SizeAndPosition from "../_SizeAndPosition";
import StyleButton from "../_StyleButton";
import { useConfigContext } from '../../_configProvider';

export default function MockupTab() {
  const { config } = useConfigContext();

  return (
    <div className={styles.setPannel}>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3">样式</Typography>
        <Box className={styles.pannelCtrlGrid}>
          <StyleButton />
        </Box>
      </Box>
      {["screenshot", "browser"].includes(config.theme) && 
        <Box className={styles.pannelCtrl}>
          <Typography className={styles.setTit} variant="h3">圆角</Typography>
          <BorderRadius />
        </Box>
      }
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3">阴影</Typography>
        <BoxShadow />
      </Box>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3">大小和位置</Typography>
        <SizeAndPosition />
      </Box>
    </div>
  )
}
