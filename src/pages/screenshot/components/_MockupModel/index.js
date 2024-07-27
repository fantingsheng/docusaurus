import { Box, Card, CardHeader, CardMedia, CardContent, Typography, Avatar, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';
import styles from './style.module.scss';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import clsx from 'clsx';
import { useConfigContext } from '../../_configProvider';

export default function MockupModel({ handleSelChange }) {
  const { config, handleConfigChange } = useConfigContext();

  const [platform, setPlatform] = useState("all");

  const mockupLst = [
    {
      name: 'screenshot',
      title: 'Screenshot',
      type: '',
      feature: false,
      subtitle: '自适应图片大小',
      thumbnail: '/screenshot/mockup/screenshot.png',
      previews: ['', '', '', '']
    },
    {
      name: 'browser',
      title: 'Browser',
      type: '',
      feature: true,
      subtitle: '自适应图片大小',
      thumbnail: '/screenshot/mockup/browser.png',
      previews: ['', '', '', '']
    },
    {
      name: 'iphone15',
      title: 'iPhone 15',
      type: 'phone',
      subtitle: '1170 x 2532',
      thumbnail: '/screenshot/mockup/iphone15.png',
      previews: ['', '', '', '']
    },
    {
      name: 'ipadPro13',
      title: 'Ipad Pro 13',
      type: 'tablet',
      subtitle: '2048 x 2732',
      thumbnail: '/screenshot/mockup/ipadPro13.png',
      previews: ['', '', '', '']
    },
    {
      name: 'macbookPro16',
      title: 'Macbook Pro 16',
      type: 'laptop',
      subtitle: '3456 x 2234',
      thumbnail: '/screenshot/mockup/macbookPro16.png',
      previews: ['', '', '', '']
    }
  ]

  const onHandleClickTheme = val => {
    const theme = mockupLst.find(el => el.name === val);
    handleConfigChange(val, 'theme');
    handleSelChange(theme?.title, 'tit');
    handleSelChange(theme?.subtitle, 'info');
    handleSelChange(theme?.thumbnail, 'pic');
  };

  return (
    <Box sx={{ position: 'relative', paddingTop: '64px' }}>
      <Box className={styles.themeTypeNav}>
        <ToggleButtonGroup
          color="primary"
          value={platform}
          exclusive
          onChange={(e, val) => setPlatform(val)}
          aria-label="Platform"
          sx={{ 
            '& button': { padding: '8px 15px' },
            '& .Mui-selected': { backgroundColor: 'rgba(0,0,0,.04)!important' } 
          }}
        >
          <ToggleButton value="all">所有</ToggleButton>
          <ToggleButton value="phone">手机</ToggleButton>
          <ToggleButton value="tablet">平板</ToggleButton>
          <ToggleButton value="laptop">笔记本</ToggleButton>
          <ToggleButton value="desktop">台式</ToggleButton>
          <ToggleButton value="watch">手表</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      <Box className={styles.themeGrid}>
        {
          mockupLst.filter(el => platform === 'all' || (platform !== 'all' && platform === el.type)).map((el, index) => (
            <Card
              className={clsx(styles.gridItem, config.theme === el.name ? styles.active : '')}
              sx={{ width: 195, backgroundColor: '#fff' }}
              key={index}
              onClick={() => onHandleClickTheme(el.name)}
            >
              <CardHeader
                sx={{ 
                  '& .MuiCardHeader-title': { fontSize: '16px' },
                  '& .MuiCardHeader-subheader': { fontSize: '12px', marginTop: '5px' },
                  padding: '10px'
                }}
                title={el.title}
                subheader={el.subtitle}
                action={
                  el.feature && 
                  <div className={styles.rightCorner}>
                    <p className={styles.tag}>New</p>
                  </div>
                }
              />
              <CardMedia
                component="img"
                height="124"
                image={el.thumbnail}
                alt={el.title}
              />
              <CardContent sx={{ padding: '10px 10px 20px !important', display: 'flex', gap: '5px' }}>
                {
                  el.previews.map((img, id) => (
                    <Avatar sx={{ bgcolor: 'rgba(0,0,0,.14)' }} variant="rounded" src={img} key={id}>
                      <InsertPhotoIcon />
                    </Avatar>
                  ))
                }
              </CardContent>
            </Card>
          ))
        }
      </Box>
    </Box>
  )
}