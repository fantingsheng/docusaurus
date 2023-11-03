import * as React from 'react';
import PropTypes from 'prop-types';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export function Main () {
  const functionList = [
    'forEach', 'map', 'filter', 'reduce', 'find', 'findIndex', 'findLast', 'findLastIndex', 'indexOf', 'lastIndexOf', 'includes', 'some', 'every', 'concat', 'slice', 
    'join', 'entries', 'keys', 'values', 'flat', 'toString', 'Array.from'
  ]
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ flexGrow: 1, display: 'flex', height: 224 }}
    >
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="The Functions of Array"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        {
          functionList.map((el, index) => (
            <Tab label={el} {...a11yProps(index)} key={el} />
          ))
        }
      </Tabs>
      {
        functionList.map((el, index) => (
          <TabPanel value={value} index={index} key={el}>
            {el}
          </TabPanel>
        ))
      }
    </Box>
  );
}

export default function () {
  return (
    <Layout title='玩转数组' description='各大数组方法使用解析，配合实例结合动画'>
    <Head>
      <meta name="keywords" content='数组, 拷贝, 过滤, 复制, 循环' />
    </Head>
      <div className='container'>
        <div className='margin-vert--lg'>
          <div className='text--center'>
            <h2>数组方法彻底玩明白</h2>
          </div>
          <Main />
        </div>
      </div>
    </Layout>
  )
}