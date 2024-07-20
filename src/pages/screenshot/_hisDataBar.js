import { useState, useRef, useEffect } from 'react';
import { IconButton, Box, Popper, ClickAwayListener, Paper, Grow, List, ListItem, Typography,
  ListItemButton, ListItemText } from '@mui/material';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { storageLocal } from '@site/src/utils/storage';
import { formateDate } from '@site/src/utils';
import { useConfigContext } from './_configProvider';

export default function HisDataBar() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [hisData, setHisData] = useState([]);
  const { handleUseConfig } = useConfigContext();
  const [name, setName] = useState(Date.now());

  useEffect(() => {
    const data = storageLocal.getItem("screenShots") || [];
    setHisData(data.sort((a, b) => (b.time - a.time)));
  }, []);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  const onClickHisoryItem = (row) => {
    setName(row.name);
    handleUseConfig(row.config);
  }
  return (
    <Box sx={{ display: 'flex',gap: '3px' }}>
      <IconButton
        sx={{ gap: '5px', borderRadius: '50px' }}
        aria-label="hide"
        size="small"
        ref={anchorRef}
        onClick={handleToggle}
      >
        <span style={{ fontSize: '12px' }}>{name}</span>
        <ArrowDropDownIcon />
      </IconButton>
      <Popper
        sx={{ zIndex: 5, minWidth: '340px', borderRadius: '10px' }}
        open={open}
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
              <ClickAwayListener onClickAway={handleClose}>
                <Box sx={{ background: '#fff', minHeight: '50px', maxHeight: '80vh', overflowY: 'scroll', borderRadius: '10px' }}>
                  <List>
                    {hisData.map(el => (
                    <ListItem
                      key={el.id}
                      disablePadding
                      secondaryAction={
                        <Typography variant='caption' sx={{ color: 'rgba(0,0,0,.6)'}}>
                          {formateDate(el.time)}
                        </Typography>
                      }
                      onClick={() => onClickHisoryItem(el)}
                    >
                      <ListItemButton>
                        <ListItemText sx={{
                          '& span': { fontSize: '12px', textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          width: '70%', } 
                        }} primary={el.name} />
                      </ListItemButton>
                    </ListItem>
                    ))}
                  </List>
                </Box>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Box>
  )
}