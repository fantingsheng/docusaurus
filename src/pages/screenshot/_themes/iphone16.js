import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function Iphone16(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.iphone16)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src={`/screenshot/theme/iphone16/${config.mockup.style}.png`} />
      <UploadCard {...props} />
    </div>
  )
}
