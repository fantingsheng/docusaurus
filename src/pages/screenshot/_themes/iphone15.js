import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function Iphone15(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.iphone15)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src="/screenshot/theme/iphone15/black.png" />
      <UploadCard {...props} />
    </div>
  )
}
