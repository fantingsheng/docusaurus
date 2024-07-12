import { useState } from 'react';
import styles from "./style.module.scss";
import clsx from "clsx";
import Link from '@docusaurus/Link';
import AirplayIcon from '@mui/icons-material/Airplay';
import AspectRatioIcon from '@mui/icons-material/AspectRatio';
import WidgetsIcon from '@mui/icons-material/Widgets';

import MockupTab from "./components/MockupTab";
import FrameTab from "./components/FrameTab";
import ViewerSelect from "./components/ViewerSelect";

import { Box, Tabs, Tab, IconButton } from '@mui/material';

export default function LeftSideBar({ children }) {
  const [value, setValue] = useState(0);

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

  return (
    <>
      <div className={styles.navbar}>
        <Link to='/'>
          <img src='/img/share.png' width='36' alt="Spacexcode's logo" />
        </Link>
        <IconButton color="primary" aria-label="Menu">
          <WidgetsIcon />
        </IconButton>
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
    </>
  )
}