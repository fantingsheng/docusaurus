import React from 'react';
import styles from './style.module.scss';
import { Box, Grid }  from '@mui/material';

export default function EmojiGallery ({ emojiList }) {
  
  const onCopyHandle = (icon) => {
    console.log("click", icon)
    navigator.clipboard.writeText(icon)
    .then(() => {
      console.log("已成功复制到剪贴板");
    })
    .catch((error) => {
      console.error("复制时出错: ", error);
    });
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
    </Box>
  )
}
