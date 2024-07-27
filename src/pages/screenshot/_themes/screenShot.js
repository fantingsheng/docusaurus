import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function ScreenShot(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.screenShot)} style={{ position: 'relative' }}>
      {config.style === 'glass-light' && 
        <div className={styles.glassLight} style={{ borderRadius: `${config.borderRadius * 1.32}px`}}/>
      }
      {config.style === 'card' && 
        <div className={styles.card} style={{ borderRadius: `${config.borderRadius}px`}}>
          <img src={config.picture} loading="eager" crossOrigin="anonymous" />
        </div>
      }
      {config.style === 'stack' &&
        <div className={styles.stack} style={{borderRadius: `${config.borderRadius}px`}}>
          <div className={clsx(styles.layer, styles.layer1)}>
            <img src={config.picture} loading="eager" crossOrigin="anonymous" />
          </div>
          <div className={clsx(styles.layer, styles.layer2)}>
            <img src={config.picture} loading="eager" crossOrigin="anonymous" />
          </div>
        </div>
      }
      <UploadCard {...props} />
    </div>
  )
}
