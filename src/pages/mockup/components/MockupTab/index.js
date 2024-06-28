import ViewerSelect from "../ViewerSelect";
import BorderRadius from "../BorderRadius";
import BoxShadow from "../BoxShadow";
import styles from "./style.module.scss";
import { Typography } from '@mui/material'; 

export default function MockupTab({ config, handleConfigChange }) {
  return (
    <div className={styles.tab}>
      <ViewerSelect />
      <div className={styles.scrollView}>
        <Typography className={styles.setTit} variant="h3">圆角</Typography>
        <BorderRadius borderRadius={config.borderRadius} handleConfigChange={handleConfigChange} />
        <Typography className={styles.setTit} variant="h3">阴影</Typography>
        <BoxShadow shadow={config.borderRadius} handleConfigChange={handleConfigChange} />
      </div>
    </div>
  )
}
