import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function SamsungGalaxyWatch4 (props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.samsungGalaxyWatch4)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src={`/screenshot/theme/samsungGalaxyWatch4/${config.mockup.style}.png`} />
      <UploadCard {...props} />
    </div>
  )
}