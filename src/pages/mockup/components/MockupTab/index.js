import ViewerSelect from "../ViewerSelect";
import BorderRadius from "../BorderRadius";
import BoxShadow from "../BoxShadow";
import styles from "./style.module.scss";
import { Box, Typography } from '@mui/material'; 

export default function MockupTab({ config, handleConfigChange }) {
  return (
    <div className={styles.tab}>
      <ViewerSelect />
      <div className={styles.scrollView}>
        <Box className={styles.pannelCtrl}>
          <Typography className={styles.setTit} variant="h3">样式</Typography>
        </Box>
        <Box className={styles.pannelCtrl}>
          <Typography className={styles.setTit} variant="h3">圆角</Typography>
          <BorderRadius borderRadius={config.borderRadius} handleConfigChange={handleConfigChange} />
        </Box>
        <Box className={styles.pannelCtrl}>
          <Typography className={styles.setTit} variant="h3">阴影</Typography>
          <BoxShadow shadow={config.borderRadius} handleConfigChange={handleConfigChange} />
        </Box>
      </div>
    </div>
  )
}
