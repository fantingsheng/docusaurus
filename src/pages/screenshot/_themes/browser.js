import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function Browser(props) {
  return (
    <div className={clsx(styles.theme, styles.browser)}>
      <UploadCard {...props} />
    </div>
  )
}
