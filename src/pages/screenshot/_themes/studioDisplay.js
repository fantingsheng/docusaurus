import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function StudioDisplay (props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.studioDisplay)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src="/screenshot/theme/studioDisplay/default.png" />
      <UploadCard {...props} />
    </div>
  )
}
