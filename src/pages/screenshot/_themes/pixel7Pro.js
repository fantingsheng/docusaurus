import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function Pixel7Pro(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.pixel7Pro)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src="/screenshot/theme/pixel7Pro/default.png" />
      <UploadCard {...props} />
    </div>
  )
}
