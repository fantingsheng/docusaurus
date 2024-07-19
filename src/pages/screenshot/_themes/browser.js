import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";
import BrowserWindow from '@site/src/components/BrowserWindow';


export default function Browser(props) {
  return (
    <div className={clsx(styles.theme, styles.browser)}>
      <div className={styles.header}>
        <div className={styles.button}>
          <span style={{ background: 'rgb(242, 95, 88)'}}></span>
          <span style={{ background: 'rgb(251, 190, 60)'}}></span>
          <span style={{ background: 'rgb(88, 203, 66)'}}></span>
        </div>
        <div className={styles.address}>{"https://spacexcode.com"}</div>
        <div className={styles.menu}>
          <div>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      <div className={styles.body}>
        <UploadCard {...props} showBorderRadius={false} />
      </div>
    </div>
  )
}
