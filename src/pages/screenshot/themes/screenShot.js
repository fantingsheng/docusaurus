import UploadCard from "../components/UploadCard";
import StyleButton from "../components/StyleButton";
import styles from "./style.module.scss";

export const screenShotStyle = () => {
  return (
    <>

    </>
  )
}

export default function ScreenShot(props) {
  return (
    <div className={styles.theme}>
      <UploadCard {...props} />
    </div>
  )
}
