import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function IphoneSe(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.iphoneSe)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src={`/screenshot/theme/iphoneSe/${config.style}.png`} />
      <UploadCard {...props} />
    </div>
  )
}
