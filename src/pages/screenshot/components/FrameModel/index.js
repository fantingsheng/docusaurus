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

  // 公众号
  const wechatSizes = [
    { aspectRatio: "1 / 1", width: 200, height: 200 },
    { aspectRatio: "2.35 / 1", width: 900, height: 383 }
  ]

  // 掘金
  const juejinSizes = [];
  // 视频号
  const wechatVideoSizes = [];
  // 抖音
  const douyinSizes = [];

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
      <Typography variant="button" sx={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
        <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox="0 0 576 512" color="#07c160" height={20} width={20} xmlns='http://www.w3.org/2000/svg' style={{color: "#07c160"}}>
          <path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"></path>
        </svg>
        公众号</Typography>
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