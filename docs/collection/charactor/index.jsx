import React, { useState } from 'react';
import styles from './style.module.scss';
import { Box, Grid, Alert, AlertTitle, Snackbar }  from '@mui/material';
import confetti from 'canvas-confetti';

export default function EmojiGallery ({ emojiList }) {
  const [copied, setCopied] = useState(false);
  const [icon, setIcon] = useState('');
  const onCopyHandle = (e, iconText) => {
    // console.log("click", e)
    navigator.clipboard.writeText(iconText)
    .then(() => {
      setCopied(true);
      setIcon(iconText);
      confetti({
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
      <Grid container spacing={2}>
        {
          emojiList.map((el, index) => (
            <Grid item xs={2} md={1} key={index}>
              <div className={styles.iconBlock} onClick={(e) => onCopyHandle(e, el)}>{el}</div>
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
