import React from 'react';
import { useRef, useState } from 'react';
import { Popper, Paper, Box, Grow, Typography, TextField,
  ClickAwayListener } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import clsx from 'clsx';
import styles from './style.module.scss';

export default function ({ handleConfigChange }) {
  const anchorRef = useRef(null);
  const [inputCode, setInputCode] = useState("");
  const [open, setOpen] = useState(false);
  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const onCodeInputChange = val => {
    setInputCode(val);
    const reg = /linear-gradient\([^)]*\)/;
    const match = val.match(reg);
    console.log("match", match);
    if (match) {
      handleConfigChange(match[0], 'gradientBgColor')
    }
  }

  return (
    <>
      <div ref={anchorRef} className={clsx(styles.bgGradient, styles.clearColor)} onClick={handleToggle}>
        <MoreHorizIcon sx={{ fontSize: 22 }}/>
      </div>
      <Popper sx={{ zIndex: 1, width: '500px' }} open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === 'bottom' ? 'center top' : 'center bottom',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <Box sx={{ backgroundColor: '#fff', padding: '20px', maxHeight: '600px', overflowY: 'scroll' }}>
                  <Typography sx={{ marginBottom: '10px' }}>去 <a href="https://uigradients.com/" target='_blank'>uiGradients</a> 网站找到心仪的渐变色后拷贝 CSS 代码粘贴到输入框中</Typography>
                  <Typography sx={{ marginBottom: '10px' }}>或者利用在线工具 <a href="https://cssgradient.io/" target='_blank'>cssgradient.io</a> 定制你的渐变色</Typography>
                  <TextField
                    value={inputCode}
                    onChange={e => onCodeInputChange(e.target.value)}
                    placeholder='请输入指定格式 CSS 代码'
                    className={styles.sizeInput}
                    size='small'
                    multiline
                    minRows={5}
                    maxRows={10}
                    fullWidth
                  />
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}