import UploadCard from "../components/_UploadCard";
import styles from "./style.module.scss";
import clsx from "clsx";

export default function MinimalPhone(props) {
  const { config } = {...props}
  return (
    <div className={clsx(styles.theme, styles.minimalPhone)} style={{ position: 'relative' }}>
      <UploadCard {...props} />
    </div>
  )
}
