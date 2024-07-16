import { Box, Typography, Divider } from '@mui/material';
import styles from "./style.module.scss";
import clsx from "clsx";
import { useConfigContext } from '../../_configProvider';


export default function FrameModel({ handleSelChange }) {
  const { config, handleConfigChange } = useConfigContext();

  const usualSizes = [
    { aspectRatio: "16 / 9", width: 1920, height: 1080 },
    { aspectRatio: "3 / 2", width: 1920, height: 1280 },
    { aspectRatio: "4 / 3", width: 1920, height: 1440 },
    { aspectRatio: "5 / 4", width: 1920, height: 1536 },
    { aspectRatio: "1 / 1", width: 1920, height: 1920 },
    { aspectRatio: "4 / 5", width: 1080, height: 1350 },
    { aspectRatio: "3 / 4", width: 1080, height: 1440 },
    { aspectRatio: "2 / 3", width: 1080, height: 1620 },
    { aspectRatio: "9 / 16", width: 1080, height: 1920 }
  ];

  const wechatSizes = [
    { aspectRatio: "1 / 1", width: 200, height: 200 },
    { aspectRatio: "2.35 / 1", width: 900, height: 383 }
  ]

  const onSizeButtonClick = (ar, w, h) => {
    handleSelChange(`Default ${ar.replace("/", ":")}`, "tit");
    handleSelChange(`${w} x ${h}`, "info");
    handleConfigChange(ar, "ratio");
    handleConfigChange(w, "width");
    handleConfigChange(h, "height");
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="button">常用尺寸</Typography>
      <Box className={styles.frameWrapper}>
        {
          usualSizes.map((el, index) => (
            <button 
              className={clsx(styles.frameItem, el.width === config.width && el.height === config.height ? styles.active : '')}
              key={index}
              onClick={() => onSizeButtonClick(el.aspectRatio, el.width, el.height)}
            >
              <div className={styles.frameOuter}>
                <div className={styles.lineFrame} style={{ aspectRatio: el.aspectRatio }}>
                  <span>{el.aspectRatio.replace("/", ":")}</span>
                </div>
              </div>
              <div className={styles.sizeText}>{el.wxh}</div>
            </button>
          ))
        }
      </Box>
      <Divider sx={{ margin: '10px 0', backgroundColor: 'rgba(0,0,0,.08)' }} />
      <Typography variant="button">公众号</Typography>
      <Box className={styles.frameWrapper}>
        {
          wechatSizes.map((el, index) => (
            <button
              className={clsx(styles.frameItem, el.width === config.width && el.height === config.height ? styles.active : '')}
              key={index}
              onClick={() => onSizeButtonClick(el.aspectRatio, el.width, el.height)}
            >
              <div className={styles.frameOuter}>
                <div className={styles.lineFrame} style={{ aspectRatio: el.aspectRatio }}>
                  <span>{el.aspectRatio.replace("/", ":")}</span>
                </div>
              </div>
              <div className={styles.sizeText}>{el.wxh}</div>
            </button>
          ))
        }
      </Box>
    </Box>
  )
}