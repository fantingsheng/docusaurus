import styles from "./style.module.scss";

export default function Preview() {
  return (
    <div
      id="previewFrame"
      className={styles.previewFrame}
      style={{ aspectRatio: "4 / 3", width: "auto", height: "100%", fontSize: "4.06px", transform: "none", transformOrigin: "50% 50% 0px"}}
    >
      <div
        className={styles.frameGrident}
        style={{ backgroundImage: "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%", opacity: 1}}
      ></div>
      <div className={styles.mockupWrapper} style={{ transform: "scale(1) translateX(0%) translateY(0%)"}}>
        <div className={styles.screenshot}></div>
      </div>
    </div>
  )
}