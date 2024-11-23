import styles from "./style.module.scss";

export default function LightAnimateButton() {
  return (
    <button className={styles.button}>
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.98883 17.9652C8.44583 18.297 7.74902 17.9063 7.74902 17.2699V6.73023C7.74902 6.09386 8.44583 5.70307 8.98883 6.0349L17.6122 11.3047C18.1321 11.6225 18.1321 12.3776 17.6122 12.6954L8.98883 17.9652Z" fill="#fff"></path></svg>
      <span className={styles.btnText}>Watch the guided tour</span>
      <span className={styles.light}></span>
    </button>
  )
}