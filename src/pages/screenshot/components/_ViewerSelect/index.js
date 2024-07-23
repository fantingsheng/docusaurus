import { useState, useRef, useContext } from 'react';
import { Box, Popper, ClickAwayListener, Paper, Grow } from '@mui/material';
import MockupModel from "../_MockupModel";
import FrameModel from "../_FrameModel";
import clsx from 'clsx';
import styles from './style.module.scss';
import { useConfigContext } from '../../_configProvider';


export default function ViewerSelect({ openStyle }) {
  const { config } = useConfigContext();

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const [selObj, setSelObj] = useState(openStyle === "mockup" ? {
    tit: "Screenshot",
    info: "图片自适应大小",
    pic: "/screenshot/mockup/screenshot.png"
  } : {
    tit: "Default 4 : 3",
    info: "1920 x 1440"
  });

  const handleSelChange = (val, key) => {
    setSelObj((prev) => ({ ...prev, [key]: val }));
  }; 

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };
  
  return (
    <>
      <Box
        sx={{ width: '100%', position: 'absolute', background: '#fff', zIndex: 2, padding: '0 8px 8px' }}
      >
        <Box ref={anchorRef} 
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '54px',
            border: `1px solid #eee`,
            borderRadius: '5px',
            padding: '8px',
            gap: '8px',
            cursor: 'pointer'
          }}
          onClick={handleToggle}
        >
          <Box className={styles.grayModel} sx={{ aspectRatio: config.ratio, border: selObj.pic ? 'none' : `1px solid var(--mui-palette-primary-main)` }}>
            {selObj.pic ? <img src={selObj.pic} style={{ width: '100%', objectFit: 'cover'}} /> : ''}
          </Box> 
          <div className={styles.line}>
            {selObj.tit}< br/>
            <span className={styles.small}>{selObj.info}</span>
          </div>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className={clsx(styles.moreBtn, open ? styles.open : '')}>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
          </svg>
        </Box>
      </Box>
      <Popper sx={{ zIndex: 5, borderRadius: '10px' }} open={open} placement="bottom-start" anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'left top',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <Box className={styles.popperBox} style={{ borderRadius: '10px' }}>
                  {
                    openStyle === "mockup" ? 
                      <MockupModel handleSelChange={handleSelChange} /> 
                      :
                      <FrameModel handleSelChange={handleSelChange} />
                  }
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}