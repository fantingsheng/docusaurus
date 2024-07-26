import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function IpadPro13(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.ipadPro13)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src="/screenshot/theme/ipadPro13/grey.png" />
      <UploadCard {...props} />
    </div>
  )
}
