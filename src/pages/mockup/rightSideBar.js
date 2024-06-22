import styles from "./style.module.scss";
import Preview from "./preview";

export default function RightSideBar() {
  return (
    <div className={styles.layout}>
      <div className={styles.cardsWrapper}>
        <Preview />
      </div>
    </div>
  )
}