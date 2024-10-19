import { SketchPicker } from 'react-color';
import { Popper, TextField, Paper, Box, Grow, ClickAwayListener } from '@mui/material';
import styles from "./style.module.scss";
import { useEffect, useState, useRef } from 'react';

export default function ColorPicker({ defaultColor, onChange, inputWidth}) {
  const [color, setColor] = useState(defaultColor);
  const anchorRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setColor(defaultColor)
  }, [defaultColor])

  const handleBgColorClick = (color) => {
    setColor(color);
    onChange(color);
  }

  const handleVisible = () => {
    setVisible((prevOpen) => !prevOpen);
  };

  const handleVisibleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setVisible(false);
  };

  return (
    <Box sx={{ display: 'flex', alignItems: 'flex-end', gap: '6px' }}>
      <div
        ref={anchorRef}
        className={styles.colorPicker}
        style={{ backgroundColor: color }}
        onClick={handleVisible}
      />
      <TextField
        value={color}
        onChange={e => handleBgColorClick(e.target.value)}
        size='small'
        variant='standard'
        sx={{ width: inputWidth || '80px', flex: 1 }}
      />
      <Popper
        sx={{ zIndex: 5, minWidth: '200px' }}
        open={visible}
        placement="bottom"
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
              <ClickAwayListener onClickAway={handleVisibleClose}>
                <SketchPicker
                  color={color}
                  onChangeComplete={(color) => handleBgColorClick(color.hex)}
                />
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  )
}
