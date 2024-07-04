import { Box, Card, CardHeader, CardMedia, CardContent, Typography, ToggleButtonGroup, ToggleButton, Divider } from '@mui/material';
import styles from "./style.module.scss";
import clsx from "clsx";
import { useState } from 'react';

export default function FrameModel({ handleSelChange }) {
  const [wxh, setWxh] = useState("1920 x 1080");
  const sizeLst = [
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

  const onSizeButtonClick = (rt, wh) => {
    setWxh(wh);
    handleSelChange(`Default ${rt}`, "tit");
    handleSelChange(wh, "info");
  };

  return (
    <Box>
      <Divider />
      <Box className={styles.frameWrapper}>
        {
          sizeLst.map((el, index) => (
            <button className={clsx(styles.frameItem, el.wxh === wxh ? styles.active : '')} key={index} onClick={() => onSizeButtonClick(el.ratioText, el.wxh)}>
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
      <Divider />
    </Box>
  )
}