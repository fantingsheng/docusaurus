import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function IpadAir (props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.ipadAir)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src={`/screenshot/theme/ipadAir/${config.style}.png`} />
      <UploadCard {...props} />
    </div>
  )
}