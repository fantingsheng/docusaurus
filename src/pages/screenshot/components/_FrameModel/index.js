import { Box, Typography, Divider } from '@mui/material';
import styles from "./style.module.scss";
import clsx from "clsx";
import { useConfigContext } from '../../_configProvider';


export default function FrameModel({ handleSelChange }) {
  const { config, handleConfigChange } = useConfigContext();

  const platSizeLst = [
    {
      platform: "常用尺寸",
      icon: "",
      sizeLst: [
        { aspectRatio: "16 / 9", width: 1920, height: 1080 },
        { aspectRatio: "3 / 2", width: 1920, height: 1280 },
        { aspectRatio: "4 / 3", width: 1920, height: 1440 },
        { aspectRatio: "5 / 4", width: 1920, height: 1536 },
        { aspectRatio: "1 / 1", width: 1920, height: 1920 },
        { aspectRatio: "4 / 5", width: 1080, height: 1350 },
        { aspectRatio: "3 / 4", width: 1080, height: 1440 },
        { aspectRatio: "2 / 3", width: 1080, height: 1620 },
        { aspectRatio: "9 / 16", width: 1080, height: 1920 }
      ]
    },
    {
      platform: "公众号",
      icon: () => <svg stroke='currentColor' fill='currentColor' strokeWidth='0' viewBox="0 0 576 512" color="#07c160" height={20} width={20} xmlns='http://www.w3.org/2000/svg' style={{color: "#07c160"}}>
        <path d="M385.2 167.6c6.4 0 12.6.3 18.8 1.1C387.4 90.3 303.3 32 207.7 32 100.5 32 13 104.8 13 197.4c0 53.4 29.3 97.5 77.9 131.6l-19.3 58.6 68-34.1c24.4 4.8 43.8 9.7 68.2 9.7 6.2 0 12.1-.3 18.3-.8-4-12.9-6.2-26.6-6.2-40.8-.1-84.9 72.9-154 165.3-154zm-104.5-52.9c14.5 0 24.2 9.7 24.2 24.4 0 14.5-9.7 24.2-24.2 24.2-14.8 0-29.3-9.7-29.3-24.2.1-14.7 14.6-24.4 29.3-24.4zm-136.4 48.6c-14.5 0-29.3-9.7-29.3-24.2 0-14.8 14.8-24.4 29.3-24.4 14.8 0 24.4 9.7 24.4 24.4 0 14.6-9.6 24.2-24.4 24.2zM563 319.4c0-77.9-77.9-141.3-165.4-141.3-92.7 0-165.4 63.4-165.4 141.3S305 460.7 397.6 460.7c19.3 0 38.9-5.1 58.6-9.9l53.4 29.3-14.8-48.6C534 402.1 563 363.2 563 319.4zm-219.1-24.5c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.8 0 24.4 9.7 24.4 19.3 0 10-9.7 19.6-24.4 19.6zm107.1 0c-9.7 0-19.3-9.7-19.3-19.6 0-9.7 9.7-19.3 19.3-19.3 14.5 0 24.4 9.7 24.4 19.3.1 10-9.9 19.6-24.4 19.6z"></path>
      </svg>,
      sizeLst: [
        { aspectRatio: "1 / 1", width: 200, height: 200 },
        { aspectRatio: "2.35 / 1", width: 900, height: 383 }
      ]
    },
    {
      platform: "掘金",
      icon: () => <svg role="img" viewBox="0 0 24 24" fill='currentColor' style={{ color: "#007FFF" }} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><title>Juejin</title><path d="m12 14.316 7.454-5.88-2.022-1.625L12 11.1l-.004.003-5.432-4.288-2.02 1.624 7.452 5.88Zm0-7.247 2.89-2.298L12 2.453l-.004-.005-2.884 2.318 2.884 2.3Zm0 11.266-.005.002-9.975-7.87L0 12.088l.194.156 11.803 9.308 7.463-5.885L24 12.085l-2.023-1.624Z"/></svg>,
      sizeLst: [
        { aspectRatio: "1.5 / 1", width: 192, height: 128 }
      ]
    },
    {
      platform: "X",
      icon: () => <svg role="img" viewBox="0 0 24 24" fill='currentColor' xmlns="http://www.w3.org/2000/svg" style={{ color: "#000000" }} height={20} width={20}><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>,
      sizeLst: [
        { aspectRatio: "16 / 9", width: 1200, height: 675 },
        { aspectRatio: "3 / 1", width: 1500, height: 500 }
      ]
    },
    {
      platform: "Instagram",
      icon: () => <svg role="img" viewBox="0 0 24 24" fill='currentColor' xmlns="http://www.w3.org/2000/svg" style={{ color: "#E4405F" }} height={20} width={20}><title>Instagram</title><path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/></svg>,
      sizeLst: [
        { aspectRatio: "1 / 1", width: 1080, height: 1080 },
        { aspectRatio: "4 / 5", width: 1080, height: 1350 },
        { aspectRatio: "9 / 16", width: 1080, height: 1920 }
      ]
    }
  ];
  // 视频号
  const wechatVideoSizes = [];
  // 抖音
  const douyinSizes = [];
  
  // youtube
  const youtubeSizes = [];

  const onSizeButtonClick = (ar, w, h) => {
    handleSelChange(`Default ${ar.replace("/", ":")}`, "tit");
    handleSelChange(`${w} x ${h}`, "info");
    handleConfigChange(ar, "ratio");
    handleConfigChange(w, "width");
    handleConfigChange(h, "height");
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {
        platSizeLst.map((item, id) => (<Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }} key={id}>
        <Typography variant="button" sx={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
        {item.icon && item.icon()}
        {item.platform}</Typography>          
        <Box className={styles.frameWrapper}>
            {
              item.sizeLst.map((el, index) => (
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
                  <div className={styles.sizeText}>{`${el.width} x ${el.height}`}</div>
                </button>
              ))
            }
          </Box>
          <Divider sx={{ margin: '15px 0', borderColor: 'rgba(0,0,0,.05)', backgroundColor: 'rgba(0,0,0,.05)' }} />
          </Box>
        ))
      }
      {/* <Typography variant="button">常用尺寸</Typography>
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
              <div className={styles.sizeText}>{`${el.width} x ${el.height}`}</div>
            </button>
          ))
        }
      </Box>
      <Divider sx={{ margin: '15px 0', borderColor: 'rgba(0,0,0,.05)', backgroundColor: 'rgba(0,0,0,.05)' }} />
      <Typography variant="button" sx={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
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
              <div className={styles.sizeText}>{`${el.width} x ${el.height}`}</div>
            </button>
          ))
        }
      </Box>
      <Divider sx={{ margin: '15px 0', borderColor: 'rgba(0,0,0,.05)', backgroundColor: 'rgba(0,0,0,.05)' }} />
      <Typography variant="button" sx={{ display: 'flex', alignItems: 'center', gap: '8px'}}>
        <svg role="img" viewBox="0 0 24 24" fill='currentColor' style={{ color: "#007FFF" }} height={20} width={20} xmlns="http://www.w3.org/2000/svg"><title>Juejin</title><path d="m12 14.316 7.454-5.88-2.022-1.625L12 11.1l-.004.003-5.432-4.288-2.02 1.624 7.452 5.88Zm0-7.247 2.89-2.298L12 2.453l-.004-.005-2.884 2.318 2.884 2.3Zm0 11.266-.005.002-9.975-7.87L0 12.088l.194.156 11.803 9.308 7.463-5.885L24 12.085l-2.023-1.624Z"/></svg>
        掘金</Typography>
        <Box className={styles.frameWrapper}>
        {
          juejinSizes.map((el, index) => (
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
              <div className={styles.sizeText}>{`${el.width} x ${el.height}`}</div>
            </button>
          ))
        }
      </Box> */}
    </Box>
  )
}