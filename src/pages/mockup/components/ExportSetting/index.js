import { useState, useRef } from 'react';
import { Box, Button, Popper, ClickAwayListener, Paper, Grow } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

export default function ExportSetting() {
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
      <Button ref={anchorRef} variant="contained" size="small" sx={{ minWidth: '45px' }} onClick={handleToggle}><SettingsIcon /></Button>
      <Popper sx={{ zIndex: 1 }} open={open} placement="top-end" anchorEl={anchorRef.current} role={undefined} transition disablePortal>
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
                <Box sx={{ background: '#fff', padding: '10px' }}>setting</Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}