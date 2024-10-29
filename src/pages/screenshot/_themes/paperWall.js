import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function PaperWall(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.paperWall)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src={`/screenshot/theme/paperWall/handCatch.png`} />
      <UploadCard {...props}>
        <div className={styles.topBar}>
          <img crossOrigin="anonymous" className={styles.topNav} src={`/screenshot/theme/paperWall/topBar1.svg`} />
          <img crossOrigin="anonymous" className={styles.centerStatus} src={`/screenshot/theme/paperWall/topBar.png`} />
        </div>
        <img crossOrigin="anonymous" className={styles.bottomBar} src={`/screenshot/theme/paperWall/bottom.svg`} />
      </UploadCard>
    </div>
  )
}
