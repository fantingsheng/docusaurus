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
        sx={{ width: '100%', position: 'absolute', background: '#fff', zIndex: 2, padding: '0 10px 8px' }}
      >
        <Box ref={anchorRef} 
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '54px',
            border: `1px solid #E4E7ED`,
            borderRadius: '8px',
            padding: '8px',
            gap: '8px',
            cursor: 'pointer',
            userSelect: 'none'
          }}
          onClick={handleToggle}
        >
          <Box
            className={styles.grayModel}
            sx={{ aspectRatio: config.ratio }}
          >
            {openStyle === 'mockup' ? <img src={config.mockup.thumbnail} style={{ width: '100%', height: '100%', objectFit: 'cover'}} />
              : <div className={styles.frameIcon} />
            }
          </Box> 
          <div className={styles.line}>
            <div className={styles.tit}>
              {openStyle === 'mockup' ? config.mockup.title : `${config.frame.platform} ${config.frame.aspectRatio.replace('/', '')}`}
            </div>
            <span className={styles.small}>{openStyle === 'mockup' ? config.mockup.sizeInfo : config.frame.sizeInfo}</span>
          </div>
          <div className={styles.handler}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className={clsx(styles.moreBtn, open ? styles.open : '')}>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
            </svg>
          </div>
        </Box>
      </Box>
      <Popper sx={{ zIndex: 5, borderRadius: '10px' }} open={open} placement={openStyle === 'mockup' ? 'bottom-start' : 'bottom-end'} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: openStyle === 'mockup' ? 'left top' : 'right top',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <Box className={styles.popperBox} style={{ borderRadius: '10px', minWidth: openStyle === 'mockup' ? '400px' : '340px' }}>
                  {
                    openStyle === "mockup" ? 
                      <MockupModel open={open} /> 
                      :
                      <FrameModel />
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