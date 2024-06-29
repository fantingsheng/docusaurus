import styles from "./style.module.scss";
import Preview from "./preview";

export default function RightSideBar({ config, handleConfigChange }) {
  const transformLst = [
    "",
    "perspective(400em) rotateY(-15deg) rotateX(6deg) skew(-8deg,4deg) translate3d(-4%,-2%,0) scale(.86)",
    "rotate(-8deg) scale(.9)",
    "perspective(400em) rotateY(15deg) rotateX(6deg) skew(8deg,-4deg) translate3d(4%,-2%,0) scale(.86)",
    "perspective(400em) translate3d(0,-6%,0) rotateX(34deg) scale(.84)",
    "rotateX(40deg) rotate(40deg) scale(.8)"
  ];

  return (
    <div className={styles.layout}>
      <div className={styles.cardsWrapper}>
        {
          transformLst.map((item, index) => 
            (<div className={styles.layoutItem} key={index}>
              <div className={styles.frame} style={{ aspectRatio: '4/3', width: '100%', height: 'auto' }}>
                <Preview config={config} handleConfigChange={handleConfigChange} transform={item} />
              </div>
            </div>)
          )
        }
      </div>
    </div>
  )
}