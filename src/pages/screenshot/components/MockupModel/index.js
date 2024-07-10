import { Box, Card, CardHeader, CardMedia, CardContent, Typography, Avatar, ToggleButtonGroup, ToggleButton } from '@mui/material';
import { useState } from 'react';
import styles from './style.module.scss';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';

export default function MockupModel({ handleSelChange }) {
  const [platform, setPlatform] = useState("all");

  const mockupLst = [
    {
      name: 'screenshot',
      title: 'Screenshot',
      type: '',
      subtitle: '16 layouts',
      thumbnail: '/screenshot/mockup/screenshot.png',
      previews: ['', '', '', '']
    },
    {
      name: 'browser',
      title: 'Browser',
      type: '',
      subtitle: '4 layouts',
      thumbnail: '/screenshot/mockup/default.png',
      previews: ['', '', '', '']
    },
    {
      name: 'miniphone',
      title: 'Minimal Phone',
      type: '',
      subtitle: '8 layouts',
      thumbnail: '/screenshot/mockup/default.png',
      previews: ['', '', '', '']
    },
    {
      name: 'iphone15',
      title: 'iPhone 15',
      type: 'phone',
      subtitle: '8 layouts',
      thumbnail: '/screenshot/mockup/iphone15.webp',
      previews: ['', '', '', '']
    }
  ]

  return (
    <Box sx={{ position: 'relative', paddingTop: '54px' }}>
      <Box className={styles.navbar}>
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
      <Box sx={{ display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {
          mockupLst.filter(el => (platform !== 'all' && platform === el.type) || (platform === 'all' && true)).map((el, index) => (
            <Card sx={{ maxWidth: 285, backgroundColor: '#fff' }} key={index}>
              <CardHeader
                sx={{ '& .MuiCardHeader-title': { fontSize: '18px' }, '& .MuiCardHeader-subheader': {} }}
                title={el.title}
                subheader={el.subtitle}
              />
              <CardMedia
                component="img"
                height="124"
                image={el.thumbnail}
                alt={el.title}
              />
              <CardContent sx={{ display: 'flex', gap: '8px' }}>
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