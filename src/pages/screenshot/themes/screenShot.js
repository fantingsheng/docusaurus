import UploadCard from "../components/UploadCard";
import styles from "./style.module.scss";

export default function ScreenShot(props) {
  return (
    <div className={styles.theme}>
      <UploadCard {...props} />
    </div>
  )
}
