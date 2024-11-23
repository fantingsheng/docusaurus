import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function AppleWatchSeries8 (props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.appleWatchSeries8)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src={`/screenshot/theme/appleWatchSeries8/${config.mockup.style}.png`} />
      <UploadCard {...props} />
    </div>
  )
}