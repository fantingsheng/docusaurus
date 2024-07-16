import { useState } from 'react';
import styles from "./style.module.scss";
import clsx from "clsx";
import Link from '@docusaurus/Link';
import AirplayIcon from '@mui/icons-material/Airplay';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import WidgetsIcon from '@mui/icons-material/Widgets';
import CommentIcon from '@mui/icons-material/Comment';
import MockupTab from "./components/MockupTab";
import FrameTab from "./components/FrameTab";
import ViewerSelect from "./components/ViewerSelect";
import Giscus from "@giscus/react";

import { Box, Tabs, Tab, IconButton, Drawer } from '@mui/material';

export default function LeftSideBar({ children }) {
  const [value, setValue] = useState(0);
  const [open, setOpen] = useState(false);

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
          <IconButton color="primary" aria-label="Menu">
            <WidgetsIcon />
          </IconButton>
        </Box>
      </div>
      <div className={clsx(styles.pannel)}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="模型" sx={{ minHeight: '48px' }} icon={<AirplayIcon fontSize='small' />} iconPosition="start" />            
          <Tab label="框架" sx={{ minHeight: '48px' }} icon={<AspectRatioIcon fontSize='small' />} iconPosition="start" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className={styles.tabInner}>
            <ViewerSelect openStyle="mockup" />
            <div className={styles.scrollView}>
              <MockupTab />
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className={styles.tabInner}>
            <ViewerSelect openStyle="frame" />
            <div className={styles.scrollView}>
              <FrameTab />
            </div>
          </div>
        </TabPanel>
        <div className={styles.exportControls}>
          { children }
        </div>
      </div>
      <Drawer
        anchor="right"
        open={open}
        onClose={handleDrawerClose}
      >
        <Box sx={{ width: '350px', minHeight: '100vh', padding: '20px', background: '#fff' }}>
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