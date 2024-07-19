import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function ScreenShot(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.screenShot)} style={{ position: 'relative' }}>
      {config.style === 'glass-light' ? 
        <div className={styles.glassLight} style={{ borderRadius: `${config.borderRadius * 1.32}px`}}/> : <></>
      }
      <UploadCard {...props} />
    </div>
  )
}
