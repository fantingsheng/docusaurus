import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function SurfaceBook (props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.surfaceBook)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src="/screenshot/theme/surfaceBook/surfacebook.png" />
      <UploadCard {...props} />
    </div>
  )
}
