import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function Iphone14(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.iphone14)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src={`/screenshot/theme/iphone14/${config.style}.png`} />
      <UploadCard {...props} />
    </div>
  )
}
