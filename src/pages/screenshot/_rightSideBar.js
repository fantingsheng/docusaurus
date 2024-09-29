import { useState } from 'react';
import styles from "./style.module.scss";
import Preview from "./_preview";
import clsx from 'clsx';
import GoogleAdsBlock from '@site/src/components/GoogleAdsBlock';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useConfigContext } from './_configProvider';


export default function RightSideBar() {
  const { config, handleConfigChange } = useConfigContext();
  const [showAds, setShowAds] = useState(false);

  const transformLst = [
    "",
    "perspective(400em) rotateY(-15deg) rotateX(6deg) skew(-8deg,4deg) translate3d(-4%,-2%,0) scale(.86)",
    "rotate(-8deg) scale(.9)",
    "perspective(400em) rotateY(15deg) rotateX(6deg) skew(8deg,-4deg) translate3d(4%,-2%,0) scale(.86)",
    "perspective(400em) translate3d(0,-6%,0) rotateX(34deg) scale(.84)",
    "rotateX(40deg) rotate(40deg) scale(.8)"
  ];

  const onCloseAds = () => {
    setShowAds((prevVal) => !prevVal);
  }

  return (
    <div className={styles.layout}>
      <div className={styles.cardsWrapper}>
        {showAds && <div className={styles.layoutItem}>
          <div className={styles.frame} style={{ aspectRatio: '4/3', width: '100%', height: 'auto', position: 'relative' }}>
            <div className={styles.closeBtn} onClick={() => onCloseAds()}>
              <IconButton size="small"><CloseIcon sx={{ fontSize: '16px' }} /></IconButton>
            </div>
            <GoogleAdsBlock model='pureShow' height='100%' />
            {/* <div className={styles.subAds}>广告投放</div> */}
          </div>
        </div>}
        {
          transformLst.map((item, index) =>
            (<div
              className={clsx(styles.layoutItem, item === config.transform ? styles.active : '')}
              key={index}
              onClick={() => handleConfigChange(item, "transform")}
            >
              <div className={styles.frame} style={{ aspectRatio: '4/3', width: '100%', height: 'auto' }}>
                <Preview transform={item} showBtn={false} />
              </div>
            </div>)
          )
        }
      </div>
    </div>
  )
}