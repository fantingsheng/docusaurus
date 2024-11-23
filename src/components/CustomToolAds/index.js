import styles from './style.module.scss';

export default function CustomToolAds() {
  return (
    <div className={styles.makeToolGrid}>
      <div className={styles.gridItem}>
        <a className={styles.link} href="/screenshot" target="_blank">图片美化套壳工具</a>
      </div>
      <div className={styles.gridItem}>
        <a className={styles.link} href="/coverview" target="_blank">封面图工具</a>
      </div>
      <div className={styles.gridItem}>
        <a className={styles.link} href="/memocard" target="_blank">文字卡片工具</a>
      </div>
      <div className={styles.gridItem}>
        <a className={styles.link} href="/codeimage" target="_blank">代码图片工具</a>
      </div>
    </div>
  )
}