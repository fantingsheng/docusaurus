import styles from "./style.module.scss";
import Preview from "./preview";

export default function RightSideBar({ config }) {
  const transformLst = [
    "",
    "perspective(400em) rotateY(-15deg) rotateX(6deg) skew(-8deg,4deg) translate3d(-4%,-2%,0) scale(.86)"
  ];

  return (
    <div className={styles.layout}>
      <div className={styles.cardsWrapper}>
        {
          transformLst.map((item, index) => 
            (<Preview config={config} transform={item} key={index} />)
          )
        }
      </div>
    </div>
  )
}