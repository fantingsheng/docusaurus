import { useState } from 'react';
import { Box, Button, Typography, styled } from "@mui/material";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

import styles from "./style.module.scss";

export default function Background({ config, handleConfigChange }) {
  const onClickTransBg = () => {
    handleConfigChange(true, "transparent")
  }

  const solidColors = ["rgb(248, 249, 250)", "rgb(222, 226, 230)", "rgb(173, 181, 189)", "rgb(73, 80, 87)", "rgb(33, 37, 41)",
    "rgb(21, 22, 23)", "rgb(255, 89, 94)", "rgb(255, 146, 76)", "rgb(255, 202, 58)", "rgb(197, 202, 48)",
  "rgb(138, 201, 38)", "rgb(63, 201, 93)"];

  const gradientColors = [
    "linear-gradient(140deg, rgb(255, 100, 50) 12.8%, rgb(255, 0, 101) 43.52%, rgb(123, 46, 255) 84.34%)",
    "linear-gradient(140deg, rgb(244, 229, 240), rgb(229, 54, 171), rgb(92, 3, 188), rgb(14, 7, 37))",
    "linear-gradient(135deg, rgb(238, 221, 243), rgb(238, 146, 177), rgb(99, 48, 180))",
    "linear-gradient(113.96deg, rgb(69, 190, 232) 13.54%, rgb(214, 161, 172) 50%, rgb(232, 140, 93) 85.42%)",
    "linear-gradient(113.96deg, rgb(69, 233, 159) 11.98%, rgb(213, 168, 155) 50%, rgb(232, 70, 152) 85.42%)",
    "linear-gradient(113.96deg, rgb(69, 223, 232) 11.98%, rgb(211, 170, 175) 50%, rgb(232, 103, 100) 85.42%)"
  ]

  const onClickSolidColor = (color) => {
    handleConfigChange(color, "bg");
  };

  const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
  });

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <Box sx={{ display: 'flex', gap: '10px' }}>
        <Button variant="contained" onClick={onClickTransBg}>透明</Button>
        <Button variant="contained">颜色</Button>
        <Button component="label" variant="contained">图片
          <VisuallyHiddenInput type="file" onChange={(e) => handleConfigChange(URL.createObjectURL(e.target.files[0]), 'bgImg')} />
        </Button>
      </Box>
      <Box className={styles.colorStyles}>
        <Typography className={styles.title} variant="h4">纯色</Typography>
        <div className={styles.solidColorList}>
          {
            solidColors.map(el => (
              <div className={styles.colorCircle} style={{ backgroundColor: el }} key={el} onClick={() => onClickSolidColor(el)}></div>
            ))
          }
        </div>
      </Box>
      <Box className={styles.colorStyles}>
        <Typography className={styles.title} variant="h4">渐变</Typography>
        <div className={styles.gridentColorList}>
          {
            gradientColors.map(el => (
              <div className={styles.colorRect} style={{ background: el }} key={el} onClick={() => onClickSolidColor(el)}></div>
            ))
          }
        </div>
      </Box>
    </Box>
  )
}
