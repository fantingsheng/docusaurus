import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function WallPaper(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.wallPaper)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src={`/screenshot/theme/wallPaper/handCatch.png`} />
      <UploadCard {...props}>
        <div className={styles.topBar}>
          <img crossOrigin="anonymous" className={styles.topNav} src={`/screenshot/theme/wallPaper/topBar1.svg`} />
          <img crossOrigin="anonymous" className={styles.centerStatus} src={`/screenshot/theme/wallPaper/topBar.png`} />
        </div>
        <img crossOrigin="anonymous" className={styles.bottomBar} src={`/screenshot/theme/wallPaper/bottom.svg`} />
      </UploadCard>
    </div>
  )
}
