import { Box, Card, CardHeader, CardMedia, CardContent, Typography, ToggleButtonGroup, ToggleButton, Divider } from '@mui/material';
import styles from "./style.module.scss";
import clsx from "clsx";
import { useState, useContext } from 'react';
import { ConfigContext } from "../../index";


export default function FrameModel({ handleSelChange }) {
  const { config, handleConfigChange } = useContext(ConfigContext);

  const usualSizes = [
    { aspectRatio: "16 / 9", ratioText: "16 : 9", wxh: "1920 x 1080" },
    { aspectRatio: "3 / 2", ratioText: "3 : 2", wxh: "1920 x 1280" },
    { aspectRatio: "4 / 3", ratioText: "4 : 3", wxh: "1920 x 1440" },
    { aspectRatio: "5 / 4", ratioText: "5 : 4", wxh: "1920 x 1536" },
    { aspectRatio: "1 / 1", ratioText: "1 : 1", wxh: "1920 x 1920" },
    { aspectRatio: "4 / 5", ratioText: "4 : 5", wxh: "1080 x 1350" },
    { aspectRatio: "3 / 4", ratioText: "3 : 4", wxh: "1080 x 1440" },
    { aspectRatio: "2 / 3", ratioText: "2 : 3", wxh: "1080 x 1620" },
    { aspectRatio: "9 / 16", ratioText: "9 : 16", wxh: "1080 x 1920" }
  ];

  const wechatSizes = [
    { aspectRatio: "1 / 1", ratioText: "1 : 1", wxh: "200 x 200" },
    { aspectRatio: "2.35 / 1", ratioText: "2.35 : 1", wxh: "900 x 383" }
  ]

  const onSizeButtonClick = (ar, rt, wh) => {
    const whar = wh.replace(" x ", "x").split("x");
    console.log("whar", whar)
    handleSelChange(`Default ${rt}`, "tit");
    handleSelChange(wh, "info");
    handleConfigChange(ar, "ratio");
    handleConfigChange(whar[0], "width");
    handleConfigChange(whar[1], "height");
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography variant="button">常用尺寸</Typography>
      <Box className={styles.frameWrapper}>
        {
          usualSizes.map((el, index) => (
            <button 
              className={clsx(styles.frameItem, el.wxh === `${config.width} x ${config.height}` ? styles.active : '')}
              key={index}
              onClick={() => onSizeButtonClick(el.aspectRatio, el.ratioText, el.wxh)}
            >
              <div className={styles.frameOuter}>
                <div className={styles.lineFrame} style={{ aspectRatio: el.aspectRatio }}>
                  <span>{el.ratioText}</span>
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
              className={clsx(styles.frameItem, el.wxh === `${config.width} x ${config.height}` ? styles.active : '')}
              key={index}
              onClick={() => onSizeButtonClick(el.aspectRatio, el.ratioText, el.wxh)}
            >
              <div className={styles.frameOuter}>
                <div className={styles.lineFrame} style={{ aspectRatio: el.aspectRatio }}>
                  <span>{el.ratioText}</span>
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