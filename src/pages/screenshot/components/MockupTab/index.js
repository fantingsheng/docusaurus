import styles from "./style.module.scss";
import { Box, Typography } from '@mui/material';
import clsx from 'clsx';
import BorderRadius from "../BorderRadius";
import BoxShadow from "../BoxShadow";
import SizeAndPosition from "../SizeAndPosition";

export default function MockupTab() {

  return (
    <div className={styles.setPannel}>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3">样式</Typography>
        <Box className={styles.pannelCtrlGrid}>
          <div className={clsx(styles.pannelBtn, styles.active)}>
            <div className={styles.preview} style={{aspectRatio: '4 / 3'}}></div>
            <p className={styles.name}>Default</p>
          </div>
        </Box>
      </Box>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h3">圆角</Typography>
        <BorderRadius />
      </Box>
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
