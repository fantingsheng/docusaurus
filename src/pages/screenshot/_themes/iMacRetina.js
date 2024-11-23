import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function ImacRetina (props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.iMacRetina)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src="/screenshot/theme/iMacRetina/default.png" />
      <UploadCard {...props} />
    </div>
  )
}