import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function HuaweiP40ProPlus (props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.huaweiP40ProPlus)} style={{ position: 'relative' }}>
      <img crossOrigin="anonymous" className={styles.device} src="/screenshot/theme/huaweiP40ProPlus/default.png" />
      <UploadCard {...props} />
    </div>
  )
}