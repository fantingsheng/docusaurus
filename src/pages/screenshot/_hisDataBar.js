import { useState, useRef, useEffect } from 'react';
import { IconButton, Box, Popper, ClickAwayListener, Paper, Grow, List, ListItem, Typography,
  ListItemButton, ListItemText } from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { formateDate } from '@site/src/utils';
import { useConfigContext } from './_configProvider';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import toast from 'react-hot-toast';

export default function HisDataBar() {
  const anchorRef = useRef(null);
  const [open, setOpen] = useState(false);
  const [hisData, setHisData] = useState([]);
  const { config, handleUseConfig } = useConfigContext();
  const [name, setName] = useState(config.id);

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
      const data = JSON.parse(window.localStorage.getItem("screenShots")) || [];
      setHisData(data.sort((a, b) => (b.time - a.time)));
    }
  }, [config.id]);

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

  const onRemoveHisData = (dataId) => {
    if (ExecutionEnvironment.canUseDOM) {
      let data = JSON.parse(window.localStorage.getItem("screenShots")) || [];
      data = data.filter(el => el.id !== dataId);
      window.localStorage.setItem("screenShots", JSON.stringify(data));
      setHisData(data.sort((a, b) => (b.time - a.time)));
      toast.success('删除成功', {position: 'top-center'});
    }
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
                        <Typography variant='caption' sx={{ color: 'rgba(0,0,0,.45)'}}>
                          {formateDate(el.time)}
                        </Typography>
                      }
                      sx={{ '&:hover .clearBtn': { visibility: 'visible' }}}
                      onClick={() => onClickHisoryItem(el)}
                    >
                      <ListItemButton sx={{ borderLeft: el.config.id == config.id ? '2px solid var(--mui-palette-primary-main)' : 'none' }}>
                        <ListItemText sx={{
                          '& span': { fontSize: '12px', textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          whiteSpace: 'nowrap',
                          width: '70%', } 
                        }} primary={el.name} />
                      </ListItemButton>
                      <IconButton
                        className="clearBtn"
                        color="error"
                        sx={{ position: 'absolute', right: '-3px', top: '-3px', padding: '3px', visibility: 'hidden' }}
                        onClick={() => onRemoveHisData(el.id)}
                      >
                        <ClearOutlinedIcon sx={{ fontSize: '14px' }} />
                      </IconButton>
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