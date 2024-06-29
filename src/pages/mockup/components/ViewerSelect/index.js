import { useState, useRef } from 'react';
import { Button, Skeleton, Box, Popper, ClickAwayListener, Paper, Grow } from '@mui/material';
import MockupModel from "../MockupModel";
import clsx from 'clsx';
import styles from './style.module.scss';

export default function ViewerSelect() {
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
        sx={{ width: '100%', position: 'absolute', background: '#fff' }}
      >
        <Box ref={anchorRef} 
          sx={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            border: `1px solid #eee`,
            borderRadius: '5px',
            padding: '8px',
            gap: '8px',
            cursor: 'pointer'
          }}
          onClick={handleToggle}
        >
          <Box sx={{ width: '60px', height: '40px', backgroundColor: '#eee' }}></Box> 
          <div className={styles.line}>iPhoneX< br/><span className={styles.small}>1920x1560</span></div>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className={clsx(styles.moreBtn, open ? styles.open : '')}>
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path>
          </svg>
        </Box>
      </Box>
      <Popper sx={{ zIndex: 1 }} open={open} placement="bottom-start" anchorEl={anchorRef.current} role={undefined} transition disablePortal>
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: 'left top',
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <Box sx={{ background: '#fff', padding: '10px', width: '400px' }}>
                  <MockupModel />
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}