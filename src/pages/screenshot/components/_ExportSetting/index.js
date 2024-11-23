import { useState, useRef } from 'react';
import { Box, Button, Popper, ClickAwayListener, Paper, Grow, Typography, styled,
  ToggleButtonGroup, ToggleButton, TextField } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';

import { useConfigContext } from '../../_configProvider';

export const CusToggleButton = styled(ToggleButton)({
  border: 'none',
  background: 'transparent',
  borderRadius: '5px !important',
  transition: 'all 0.2s ease',
  textTransform: 'none',
  '&.Mui-selected': {
    background: '#fff',
    '&:hover' : {
      background: '#fff'
    }
  },
  '&:hover': {
    background: 'transparent'
  }
})

export default function ExportSetting() {
  const { config, handleConfigChange } = useConfigContext();

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
      <Button ref={anchorRef} variant="contained" size="small" sx={{ minWidth: '45px' }} onClick={handleToggle}>
        <SettingsIcon />
      </Button>
      <Popper
        sx={{ zIndex: 5, minWidth: '240px', borderRadius: '10px' }}
        open={open}
        placement="top-end"
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
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
                <Box sx={{ background: '#fff', padding: '15px', display: 'flex', flexDirection: 'column', gap: '10px', borderRadius: '10px' }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <Typography variant="button">格式</Typography>
                    <Box>
                      <ToggleButtonGroup
                        value={config.format}
                        exclusive
                        onChange={(e, val) => handleConfigChange(val, "format")}
                        aria-label="border radius switch"
                        size="small"
                        sx={{
                          padding: '3px',
                          background: 'rgba(220,220,220,0.55)',
                          borderRadius: '5px'
                        }}
                        fullWidth
                      >
                        <CusToggleButton value="jpg" aria-label="jpg">
                          JPG
                        </CusToggleButton>
                        <CusToggleButton value="png" aria-label="png">
                          PNG
                        </CusToggleButton>
                        <CusToggleButton value="svg" aria-label="svg">
                          SVG
                        </CusToggleButton>
                      </ToggleButtonGroup>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px'}}>
                    <Typography variant="button">分辨率</Typography>
                    <Box>
                      <ToggleButtonGroup
                        value={config.expScale}
                        exclusive
                        onChange={(e, val) => handleConfigChange(val, "expScale")}
                        aria-label="border radius switch"
                        size="small"
                        sx={{
                          padding: '3px',
                          background: 'rgba(220,220,220,0.55)',
                          borderRadius: '5px'
                        }}
                        fullWidth
                      >
                        <CusToggleButton value={1} aria-label="1x">
                          1x
                        </CusToggleButton>
                        <CusToggleButton value={2} aria-label="2x">
                          2x
                        </CusToggleButton>
                        <CusToggleButton value={3} aria-label="3x">
                          3x
                        </CusToggleButton>
                      </ToggleButtonGroup>
                    </Box>
                  </Box>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
                    <Box sx={{ padding: '10px', backgroundColor: 'rgba(240,240,240,1)', borderRadius: '5px' }}>
                      <Typography variant="body2" sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <span>导出分辨率：</span>
                        <span style={{ color: 'rgba(110,110,110,1)', fontSize: '12px' }}>{`${config.width * config.expScale} x ${config.height * config.expScale}`}</span>
                      </Typography>
                    </Box>
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