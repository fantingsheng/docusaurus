import { useState } from 'react';
import styles from "./style.module.scss";
import clsx from "clsx";
import Link from '@docusaurus/Link';
import AirplayIcon from '@mui/icons-material/Airplay';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CommentIcon from '@mui/icons-material/Comment';
import MockupTab from "./components/_MockupTab";
import FrameTab from "./components/_FrameTab";
import ViewerSelect from "./components/_ViewerSelect";
import Giscus from "@giscus/react";
import AboutShot from "./_aboutDialog";

import { Box, Tabs, Tab, IconButton, Drawer, Dialog, DialogTitle, DialogContent, Divider, Typography } from '@mui/material';

export default function LeftSideBar({ themeName, changeTheme, children }) {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ padding: '8px 0'  }}>
            {children}
          </Box>
        )}
      </div>
    );
  }

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className={styles.navbar}>
        <Link to='/'>
          <img src='/img/share.png' width='36' alt="Spacexcode's logo" />
        </Link>
        <Box>
          <IconButton color="primary" aria-label="Menu" onClick={handleDrawerOpen}>
            <CommentIcon />
          </IconButton>
          <IconButton color="primary" aria-label="Menu" onClick={() => setVisible(true)}>
            <WidgetsIcon />
          </IconButton>
        </Box>
      </div>
      <div className={clsx(styles.pannel)}>
        {/* <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="模型" sx={{ minHeight: '48px' }} icon={<AirplayIcon fontSize='small' />} iconPosition="start" disableRipple />            
          <Tab label="框架" sx={{ minHeight: '48px' }} icon={<AspectRatioIcon fontSize='small' />} iconPosition="start" disableRipple />
        </Tabs> */}
        <Box sx={{ padding: '8px 0'  }}>
          <div className={styles.leftTabInner}>
            <ViewerSelect openStyle="mockup" />
            <div className={styles.scrollView}>
              <MockupTab />
            </div>
          </div>
        </Box>
        {/* <div className={styles.exportControls}>
          { children }
        </div> */}
      </div>
      <Dialog onClose={() => setVisible(false)} maxWidth="sm" open={visible}>
        <DialogTitle sx={{ backgroundColor: '#fff' }}>图片套壳美化工具</DialogTitle>
        <DialogContent sx={{ backgroundColor: '#fff' }}>
          <Typography variant="body1" sx={{ fontWeight: '600', textAlign: 'center' }}>背景主题</Typography>
          <Box sx={{ display: 'flex', gap: '15px', padding: '20px 0' }}>
            <Box
              className={clsx(styles.themeSetBox, styles.themeWhiteColor, themeName === "themeWhiteColor" ? styles.active : "")}
              onClick={() => changeTheme("themeWhiteColor")}></Box>
            <Box
              className={clsx(styles.themeSetBox, styles.themePureColor, themeName === "themePureColor" ? styles.active : "")}
              onClick={() => changeTheme("themePureColor")}></Box>
            <Box
              className={clsx(styles.themeSetBox, styles.themeYellowFitEye, themeName === "themeYellowFitEye" ? styles.active : "")}
              onClick={() => changeTheme("themeYellowFitEye")}></Box>
            <Box
              className={clsx(styles.themeSetBox, styles.themeDotGrids, themeName === "themeDotGrids" ? styles.active : "")}
              sx={{
                '&::after': {
                  zIndex: 0,
                  '--mask-offset': '20px'
                }
              }}
              onClick={() => changeTheme("themeDotGrids")}></Box>
          </Box>
          <AboutShot />
        </DialogContent>
      </Dialog>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <Box sx={{ width: '350px', minHeight: '100vh', padding: '20px', background: '#fff' }}>
          <Divider sx={{ marginBottom: '20px' }}>建议反馈，欢迎评论区留言 💬</Divider>
          <Giscus
            repo="fantingsheng/spacexcode-discus"
            repoId="R_kgDOJoGL9w"
            category="General"
            categoryId="DIC_kwDOJoGL984CWxiW"  // E.g. id of "General"
            mapping="url"                        // Important! To map comments to URL
            term="Welcome to @giscus/react component!"
            strict="0"
            reactionsEnabled={0}
            emitMetadata="1"
            inputPosition="top"
            lang="zh-Hans"
            loading='lazy'
            crossorigin="anonymous"
            async
          />
        </Box>
      </Drawer>
    </>
  )
}