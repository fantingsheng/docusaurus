import styles from "../MockupTab/style.module.scss";
import clsx from 'clsx';

export default function StylePreview({ name, active = false }) {
  retrun (
    <div className={clsx(styles.pannelBtn, active ? 'active' : '')}>
      <p className={styles.name}>Default</p>
    </div>
  )
}