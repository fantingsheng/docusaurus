import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function ScreenShot(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.screenShot)} style={{ position: 'relative' }}>
      {config.mockup.style === 'glass-light' && 
        <div className={styles.glassLight} style={{ borderRadius: `${config.borderRadius / 8 + 0.8}em`}}/>
      }
      {config.mockup.style === 'border' && 
        <div className={styles.border} style={{ borderRadius: `${config.borderRadius / 8 + 0.8}em`}}/>
      }
      {config.mockup.style === 'card' && 
        <div className={styles.card} style={{ borderRadius: `${config.borderRadius / 8}em`}}>
          <img src={config.picture} loading="eager" crossOrigin="anonymous" />
        </div>
      }
      {config.mockup.style === 'stack' &&
        <div className={styles.stack} style={{borderRadius: `${config.borderRadius / 8}em`}}>
          <div className={clsx(styles.layer, styles.layer1)}>
            <img src={config.picture} loading="eager" crossOrigin="anonymous" />
          </div>
          <div className={clsx(styles.layer, styles.layer2)}>
            <img src={config.picture} loading="eager" crossOrigin="anonymous" />
          </div>
        </div>
      }
      {config.mockup.style === 'stack2' &&
        <div className={styles.stack2} style={{borderRadius: `${config.borderRadius / 8}em`}}>
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
