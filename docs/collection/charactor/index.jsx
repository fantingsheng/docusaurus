import React, { useState } from 'react';
import styles from './style.module.scss';
import { Box, Grid, Alert, AlertTitle, Snackbar }  from '@mui/material';
import confetti from 'canvas-confetti';

export default function EmojiGallery ({ emojiList, fontSize, spacing = 2 }) {
  const [copied, setCopied] = useState(false);
  const [icon, setIcon] = useState('');
  const onCopyHandle = (e, iconText) => {
    // console.log("click", e)
    navigator.clipboard.writeText(iconText)
    .then(() => {
      setCopied(true);
      setIcon(iconText);
      confetti({
        particleCount: 50, // 默认值：50，要发射的五彩纸屑的数量。
        startVelocity: 20, // 默认值：45，五彩纸屑开始移动的速度，以像素为单位
        angle: 90, // 发射的角度，0 表示水平向右；90 表示垂直向上；180 表示水平向左；270 表示垂直向下
        spread: 360, //默认值：45，五彩纸屑在垂直方向扩散的角度，45 表示五彩纸屑以垂直方向正负 22.5 度角发射
        ticks: 300, // 默认值: 200 ，值越小粒子消失得越快，值越大粒子消失得越慢
        gravity: 0.5,
        origin: { x: e.clientX / e.view.innerWidth, y: e.clientY / e.view.innerHeight }
      });
      console.log("已成功复制到剪贴板");
    })
    .catch((error) => {
      console.error("复制时出错: ", error);
    });
  }
  const handleClose = () => {
    setCopied(false);
  }
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '4rem' }}>
      <Grid container spacing={spacing}>
        {
          emojiList.map((el, index) => (
            <Grid item xs={2} md={1} key={index}>
              <div className={styles.iconBlock} style={{ fontSize: fontSize || '2.4rem' }} onClick={(e) => onCopyHandle(e, el)}>{el}</div>
            </Grid>
          ))
        }
      </Grid>
      <Snackbar open={copied} autoHideDuration={1500} anchorOrigin={{ horizontal: 'center', vertical: 'bottom' }} onClose={handleClose}>
        <Alert severity="success"><AlertTitle>复制成功 {icon}</AlertTitle></Alert>
      </Snackbar>
    </Box>
  )
}
