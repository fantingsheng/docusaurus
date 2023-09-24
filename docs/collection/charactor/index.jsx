import React, { useState } from 'react';
import styles from './style.module.scss';
import { Box, Grid, Alert, AlertTitle, Snackbar }  from '@mui/material';

export default function EmojiGallery ({ emojiList }) {
  const [copied, setCopied] = useState(false);
  const [icon, setIcon] = useState('');
  const onCopyHandle = (iconText) => {
    console.log("click", iconText)
    navigator.clipboard.writeText(iconText)
    .then(() => {
      setCopied(true);
      setIcon(iconText);
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
          emojiList.map((el, index) => (
            <Grid item xs={2} md={1} key={index}>
              <div className={styles.iconBlock} onClick={() => onCopyHandle(el)}>{el}</div>
            </Grid>
          ))
        }
      </Grid>
      <Snackbar open={copied} autoHideDuration={1500} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }} onClose={handleClose}>
        <Alert severity="success"><AlertTitle>复制成功 {icon}</AlertTitle></Alert>
      </Snackbar>
    </Box>
  )
}
