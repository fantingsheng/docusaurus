import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function Browser(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.browser)} style={{ borderRadius: `${config.borderRadius / 8}em`}}>
      <div className={clsx(styles.header, styles[config.mockup.style])}>
        <div className={styles.button}>
          <span style={{ background: 'rgb(242, 95, 88)'}}></span>
          <span style={{ background: 'rgb(251, 190, 60)'}}></span>
          <span style={{ background: 'rgb(88, 203, 66)'}}></span>
        </div>
        <div className={styles.address}>{config.url}</div>
        <div className={styles.menu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className={styles.body}>
        <UploadCard {...props} />
      </div>
    </div>
  )
}
