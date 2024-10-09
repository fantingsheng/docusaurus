import { Box, Card, CardHeader, CardMedia, CardContent, Typography, Avatar, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useEffect, useState } from 'react';
import styles from './style.module.scss';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import clsx from 'clsx';
import { useConfigContext } from '../../_configProvider';

export default function MockupModel({ open }) {
  const { config, handleConfigMockupChange } = useConfigContext();

  const [platform, setPlatform] = useState("all");

  const mockupLst = [
    {
      name: 'screenshot',
      title: 'Screenshot',
      type: '',
      feature: false,
      subtitle: '自适应大小',
      thumbnail: '/screenshot/mockup/screenshot.png',
      previews: []
    },
    {
      name: 'browser',
      title: 'Browser',
      type: '',
      feature: true,
      subtitle: '自适应大小',
      thumbnail: '/screenshot/mockup/browser.png',
      previews: []
    },
    {
      name: 'iphone16',
      title: 'iPhone 16',
      type: 'phone',
      feature: true,
      subtitle: '1179 x 2556',
      thumbnail: '/screenshot/mockup/iphone16.png',
      previews: []
    },
    {
      name: 'minimalPhone',
      title: 'Minimal Phone',
      type: '',
      subtitle: '6 : 13',
      thumbnail: '/screenshot/mockup/minimalPhone.png',
      previews: []
    },
    {
      name: 'iphone15',
      title: 'iPhone 15',
      type: 'phone',
      subtitle: '1170 x 2532',
      thumbnail: '/screenshot/mockup/iphone15.png',
      previews: []
    },
    {
      name: 'ipadPro13',
      title: 'iPad Pro 13',
      type: 'tablet',
      subtitle: '2048 x 2732',
      thumbnail: '/screenshot/mockup/ipadPro13.png',
      previews: []
    },
    {
      name: 'macbookPro16',
      title: 'Macbook Pro 16',
      type: 'laptop',
      subtitle: '3456 x 2234',
      thumbnail: '/screenshot/mockup/macbookPro16.png',
      previews: []
    },
    {
      name: 'iMacRetina',
      title: 'iMac Retina',
      type: 'desktop',
      subtitle: '5120 x 2880',
      thumbnail: '/screenshot/mockup/imacRetina.png',
      previews: []
    },
    {
      name: 'appleWatchUltra',
      title: 'Apple Watch Ultra',
      type: 'watch',
      subtitle: '410 x 502',
      thumbnail: '/screenshot/mockup/appleWatchUltra.png',
      previews: []
    },
    {
      name: 'pixel7Pro',
      title: 'Pixel 7 Pro',
      type: 'phone',
      subtitle: '1440 x 3120',
      thumbnail: '/screenshot/mockup/pixel7Pro.png',
      previews: []
    },
    {
      name: 'surfaceBook',
      title: 'Surface Book',
      type: 'laptop',
      subtitle: '3000 x 2000',
      thumbnail: '/screenshot/mockup/surfaceBook.png',
      previews: []
    },
    {
      name: 'studioDisplay',
      title: 'Studio Display',
      type: 'desktop',
      subtitle: '5120 x 2880',
      thumbnail: '/screenshot/mockup/studioDisplay.png',
      previews: []
    },
    {
      name: 'appleWatchSeries8',
      title: 'Apple Watch Series 8',
      type: 'watch',
      subtitle: '396 x 484',
      thumbnail: '/screenshot/mockup/appleWatchSeries8.png',
      previews: []
    },
    {
      name: 'ipadAir',
      title: 'iPad Air',
      type: 'tablet',
      subtitle: '1640 x 2360',
      thumbnail: '/screenshot/mockup/ipadAir.png',
      previews: []
    },
    {
      name: 'iphone14',
      title: 'iPhone 14',
      type: 'phone',
      subtitle: '1170 x 2532',
      thumbnail: '/screenshot/mockup/iphone14.png',
      previews: []
    },
    {
      name: 'iphoneSe',
      title: 'iPhone SE',
      type: 'phone',
      subtitle: '750 x 1334',
      thumbnail: '/screenshot/mockup/iphoneSe.png',
      previews: []
    },
    {
      name: 'huaweiP40ProPlus',
      title: 'Huawei P40 Pro+',
      type: 'phone',
      subtitle: '984 x 2182',
      thumbnail: '/screenshot/mockup/huaweiP40ProPlus.png',
      previews: []
    },
    {
      name: 'samsungGalaxyWatch4',
      title: 'Samsung Galaxy Watch 4',
      type: 'watch',
      subtitle: '682 x 682',
      thumbnail: '/screenshot/mockup/samsungGalaxyWatch4.png',
      previews: []
    },
    {
      name: 'iMacPro',
      title: 'iMac Pro',
      type: 'desktop',
      subtitle: '5120 x 2880',
      thumbnail: '/screenshot/mockup/iMacPro.png',
      previews: []
    }
  ]

  useEffect(() => {
    const mockup = mockupLst.find(el => el.name === config.mockup.theme);
    setPlatform(mockup.type || "all")
  }, [open])

  const onHandleClickTheme = val => {
    const theme = mockupLst.find(el => el.name === val);
    handleConfigMockupChange({
      theme: theme.name,
      title: theme.title,
      sizeInfo: theme.subtitle,
      style: 'default',
      thumbnail: theme.thumbnail
    });
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
              className={clsx(styles.gridItem, config.mockup.theme === el.name ? styles.active : '')}
              sx={{ width: 215, backgroundColor: '#fff' }}
              key={index}
              onClick={() => onHandleClickTheme(el.name)}
            >
              <CardHeader
                sx={{ 
                  '& .MuiCardHeader-title': { fontSize: '16px' },
                  '& .MuiCardHeader-subheader': { fontSize: '12px', marginTop: '5px' },
                  padding: '12px'
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
                height="162"
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