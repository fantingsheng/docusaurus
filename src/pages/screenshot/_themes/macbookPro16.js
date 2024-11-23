import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function MacbookPro16 (props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.macbookPro16)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src="/screenshot/theme/macbookPro16/default.png" />
      <UploadCard {...props} />
    </div>
  )
}