import { useState } from 'react';
import styles from "./style.module.scss";
import clsx from "clsx";
import Link from '@docusaurus/Link';

import MockupTab from "./components/MockupTab";
import FrameTab from "./components/FrameTab";

import { Box, Tabs, Tab } from '@mui/material';

import ExportButton from "./components/ExportButton";
import ExportSetting from "./components/ExportSetting";

export default function LeftSideBar({ config, handleConfigChange }) {
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
          <Box sx={{ p: 1 }}>
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
      </div>
      <div className={clsx(styles.pannel)}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Mockup" />            
          <Tab label="Frame" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <MockupTab config={config} handleConfigChange={handleConfigChange} />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <FrameTab config={config} handleConfigChange={handleConfigChange} />
        </TabPanel>
        <div className={styles.exportControls}>
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <ExportButton />
            <ExportSetting />
          </Box>
        </div>
      </div>
    </>
  )
}