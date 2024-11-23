import { useState, useContext } from "react";
import Background from "../_Background";
import { Box, Typography } from '@mui/material';
import RangeSlider from "@site/src/components/RangeSlider";
import clsx from 'clsx';
import styles from "./style.module.scss";
import { useConfigContext } from '../../_configProvider';

export default function Frame() {
  const { config, handleConfigChange } = useConfigContext();
  const layerLst = [
    "",
    "/screenshot/overlayer/001-small.png",
    "/screenshot/overlayer/002-small.png",
    "/screenshot/overlayer/003-small.png",
    "/screenshot/overlayer/005-small.png",
    "/screenshot/overlayer/006-small.png",
    "/screenshot/overlayer/004-small.png",
    "/screenshot/overlayer/007-small.png"
  ]

  return (
    <div className={styles.setPannel}>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h5" sx={{ marginBottom: '-5px' }}>遮罩</Typography>
        <RangeSlider
          minVal={0}
          maxVal={1}
          step={0.1}
          value={config.overLayerOpacity}
          label='Opacity'
          onValueChange={val => handleConfigChange(val, "overLayerOpacity")}
        />
        <Box className={styles.layerBox} sx={{ marginTop: '-10px' }}>
          { layerLst.map((el, index) => (
            <div
              className={clsx(styles.layerBtn, config.overLayerImg === el.replace('-small', '') && el ? styles.active : '')}
              onClick={() => handleConfigChange(el.replace('-small', ''), 'overLayerImg')}
              key={index}
            >
              {el ? <div className={styles.img} style={{ backgroundImage: `url(${el})` }} /> : 
              <div className={styles.clearIcon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M3.575 7.088A9.7 9.7 0 0 0 2.25 12c0 5.384 4.365 9.75 9.75 9.75 1.79 0 3.468-.483 4.911-1.326l-1.104-1.104A8.25 8.25 0 0 1 3.75 12a8.2 8.2 0 0 1 .929-3.808zm15.686 8.831A8.25 8.25 0 0 0 12 3.75a8.2 8.2 0 0 0-3.92.988L6.981 3.639A9.7 9.7 0 0 1 12 2.25c5.384 0 9.75 4.365 9.75 9.75a9.7 9.7 0 0 1-1.39 5.018z"></path><rect width="1.89" height="26.833" x="1.788" y="3.211" fill="currentColor" rx="0.945" ry="0.945" transform="rotate(-45 1.789 3.211)"></rect></svg>
              </div>}
            </div>
            ))}
        </Box>
      </Box>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h5" sx={{ marginBottom: '-5px' }}>效果</Typography>
        <RangeSlider
          minVal={0}
          maxVal={100}
          step={1}
          value={config.noise}
          label='Noise'
          onValueChange={val => handleConfigChange(val, "noise")}
        />
        <Box sx={{ marginTop: '-20px' }}>
          <RangeSlider
            minVal={0}
            maxVal={100}
            step={1}
            value={config.blur}
            label='Blur'
            onValueChange={val => handleConfigChange(val, "blur")}
          />
        </Box>
      </Box>
      <Box className={styles.pannelCtrl}>
        <Typography className={styles.setTit} variant="h5">背景</Typography>
        <Background />
      </Box>
    </div>
  )
}
