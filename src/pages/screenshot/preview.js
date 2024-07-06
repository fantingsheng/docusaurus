import styles from "./style.module.scss";
import ScreenShot from "./screenShot";
import UploadCard from "./components/UploadCard";
import { Box } from '@mui/material';

export default function Preview({ config, handleConfigChange, transform, showBtn }) {

  return (
    <div className={styles.frameContent}>
      <div className={styles.frameBackgroundDisplay}>
        <div className={styles.frameBlur} style={{ backdropFilter: `blur(${config.blur * 0.04}em)`, transform: 'translate3d(0px, 0px, 0px)' }}></div>
        <div className={styles.frameNoise} style={{ opacity: config.noise / 100 }}></div>
        {
          !config.transparent && config.bgImg ? <img className={styles.frameBackground} src={config.bgImg} /> : ""
        }
        {
          !config.transparent && config.bg && !config.bgImg ? <div className={styles.frameBackground} style={{ background: config.bg, opacity: 1 }} /> : ""
        }
      </div>
      <div className={styles.displayContainer}>
        <div className={styles.mockupWrapper} style={{ transform: "scale(1) translateX(0%) translateY(0%)"}}>
          <div className={styles.screenshot} style={{ transform: transform, borderRadius: `${config.borderRadius}px` }}>
            {
              config?.picture ? <ScreenShot config={config} /> : showBtn ? <UploadCard handleConfigChange={handleConfigChange} /> : <Box sx={{
                width: "100%", height: "100%",
                background: "rgba(220,220,220,1)",
                color: "rgba(0,0,0,.8)",
                '&:hover': {
                  background: "rgba(220,220,220,1)"
                }
              }} />
            }
          </div>
        </div>
      </div>
    </div>
  )
}