import ViewerSelect from "../ViewerSelect";
import Background from "../Background";
import { Typography } from '@mui/material';
import styles from "./style.module.scss";

export default function Frame() {
  return (
    <div className={styles.tab}>
      <ViewerSelect />
      <div className={styles.scrollView}>
        <Typography className={styles.setTit} variant="h5">背景</Typography>
        <Background />
      </div>
    </div>
  )
}
