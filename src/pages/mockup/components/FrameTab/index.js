import ViewerSelect from "../ViewerSelect";
import styles from "./style.module.scss";

export default function Frame() {
  return (
    <div className={styles.tab}>
      <ViewerSelect />
    </div>
  )
}
