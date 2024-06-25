import ViewerSelect from "../ViewerSelect";
import styles from "./style.module.scss";

export default function MockupTab() {
  return (
    <div className={styles.tab}>
      <ViewerSelect />
      <div className={styles.scrollView}>
        fffff
      </div>
    </div>
  )
}
