import styles from "./style.module.scss";
import CoverTheme from "./themes";
import { Box } from '@mui/material';
import clsx from 'clsx';

import { useConfigContext } from './_configProvider';


export default function Preview({ transform, showBtn }) {
  const { config, handleConfigChange } = useConfigContext();

  return (
    <div className={styles.frameContent}>
      <div className={styles.frameBackgroundDisplay}>
        <div className={styles.frameBlur} style={{ backdropFilter: `blur(${config.blur * 0.04}em)`, transform: 'translate3d(0px, 0px, 0px)' }}></div>
        <div className={styles.frameNoise} style={{ opacity: config.noise / 100 }}></div>
        { !config.transparent && config.bgImg ? <img className={styles.frameBackground} src={config.bgImg} /> : "" }
        { !config.transparent && config.bg && !config.bgImg ? <div className={styles.frameBackground} style={{ background: config.bg, opacity: 1 }} /> : "" }
      </div>
      <div className={styles.displayContainer}>
        <div className={styles.mockupModule} style={{ transform: transform }}>
          <div className={styles.devices} style={{ transform: `scale(${config.scale}) translateX(${config.transformX}%) translateY(${config.transformY}%)` }}>
            <div className={styles.item} style={{ borderRadius: `${config.borderRadius}px` }}>
              <div className={clsx(styles.itemContainer, 'item-container')}>
                {showBtn ?
                  <CoverTheme config={config} handleConfigChange={handleConfigChange} /> : 
                  <Box sx={{
                    width: "100%",
                    height: "100%",
                    background: "rgba(220,220,220,1)",
                    borderRadius: '10px',
                    color: "rgba(0,0,0,.8)",
                    '&:hover': {
                      background: "rgba(220,220,220,1)"
                    }
                  }}>
                    {config.picture ? <img src={config.picture} /> : <></>}
                  </Box>
                }
                <div className={styles.shadow} style={{ borderRadius: `${config.borderRadius}px` }}>
                  <div className={styles.shadowLayer} 
                    style={{transform: 'translateX(0.46875em) translateY(0.65625em) scale(1)', filter: 'blur(0.325em)', opacity: config.shadowOpacity}} />
                  <div className={styles.shadowLayer} 
                    style={{transform: 'translateX(1.40625em) translateY(1.96875em) scale(1)', filter: 'blur(0.975em)', opacity: config.shadowOpacity}} />
                  <div className={styles.shadowLayer} 
                    style={{transform: 'translateX(2.8125em) translateY(3.9375em) scale(1)', filter: 'blur(1.95em)', opacity: config.shadowOpacity}} />
                  <div className={styles.shadowLayer} 
                    style={{transform: 'translateX(4.6875em) translateY(6.5625em) scale(1)', filter: 'blur(3.25em)', opacity: config.shadowOpacity}} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}