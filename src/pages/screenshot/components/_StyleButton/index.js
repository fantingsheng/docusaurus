import styles from "../_MockupTab/style.module.scss";
import clsx from 'clsx';

export default function StylePreview({ name, active = false }) {
  return (
    <div className={clsx(styles.pannelBtn, active ? 'active' : '')}>
      <p className={styles.name}>Default</p>
    </div>
  )
}