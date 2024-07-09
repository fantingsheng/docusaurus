import { useState, useRef } from 'react';
import { Box, Button, Popper, ClickAwayListener, Paper, Grow, Typography, ToggleButtonGroup, ToggleButton } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

export default function ExportSetting({ expConfig, handleExpConfigChange }) {
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
      <Popper sx={{ zIndex: 5, minWidth: '200px' }} open={open} placement="top-end" anchorEl={anchorRef.current} role={undefined} transition disablePortal>
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
                <Box sx={{ background: '#fff', padding: '10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <Typography>格式</Typography>
                    <ToggleButtonGroup
                      value={expConfig.format}
                      exclusive
                      onChange={(e, val) => handleExpConfigChange(val, "format")}
                      aria-label="border radius switch"
                      size="small"
                    >
                      <ToggleButton value="jpg" aria-label="jpg">
                        JPG
                      </ToggleButton>
                      <ToggleButton value="png" aria-label="png">
                        PNG
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <Typography>分辨率</Typography>
                    <ToggleButtonGroup
                      value={expConfig.scale}
                      exclusive
                      onChange={(e, val) => handleExpConfigChange(val, "scale")}
                      aria-label="border radius switch"
                      size="small"
                    >
                      <ToggleButton value={1} aria-label="1x">
                        1x
                      </ToggleButton>
                      <ToggleButton value={2} aria-label="2x">
                        2x
                      </ToggleButton>
                      <ToggleButton value={3} aria-label="3x">
                        3px
                      </ToggleButton>
                    </ToggleButtonGroup>
                  </Box>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  )
}