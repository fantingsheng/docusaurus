import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function AppleWatchUltra (props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.appleWatchUltra)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src="/screenshot/theme/appleWatchUltra/default.png" />
      <UploadCard {...props} />
    </div>
  )
}