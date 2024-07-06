import { Box, Card, CardHeader, CardMedia, CardContent, Typography, Avatar, ToggleButtonGroup, ToggleButton, Divider } from '@mui/material';
import { useState } from 'react';
import styles from './style.module.scss';

export default function MockupModel({ handleSelChange }) {
  const [platform, setPlatform] = useState("all");

  const mockupLst = [
    { 
      title: 'Screenshot',
      type: '',
      subtitle: '16 layouts',
      thumbnail: 'https://mui.com/static/images/cards/paella.jpg',
      previews: [
        'https://mui.com/static/images/cards/paella.jpg',
        'https://mui.com/static/images/cards/paella.jpg'
      ]
    },
    { 
      title: 'Screenshot',
      type: '',
      subtitle: '16 layouts',
      thumbnail: 'https://mui.com/static/images/cards/paella.jpg',
      previews: [
        'https://mui.com/static/images/cards/paella.jpg',
        'https://mui.com/static/images/cards/paella.jpg'
      ]
    },
    { 
      title: 'Screenshot',
      type: '',
      subtitle: '16 layouts',
      thumbnail: 'https://mui.com/static/images/cards/paella.jpg',
      previews: [
        'https://mui.com/static/images/cards/paella.jpg',
        'https://mui.com/static/images/cards/paella.jpg'
      ]
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
          sx={{ '& button': { padding: '8px 15px' }, '& .Mui-selected': { backgroundColor: 'rgba(0,0,0,.04)!important' } }}
        >
          <ToggleButton value="all">所有</ToggleButton>
          <ToggleButton value="phone">手机</ToggleButton>
          <ToggleButton value="tablet">平板</ToggleButton>
          <ToggleButton value="laptop">笔记本</ToggleButton>
          <ToggleButton value="desktop">台式</ToggleButton>
          <ToggleButton value="watch">手表</ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {/* <Divider sx={{ margin: '10px 0' }} /> */}
      <Box sx={{ display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(2, 1fr)' }}>
        {
          mockupLst.map(el => (
            <Card sx={{ maxWidth: 285, backgroundColor: '#fff' }}>
              <CardHeader
                title={el.title}
                subheader={el.subtitle}
              />
              <CardMedia
                component="img"
                height="124"
                image={el.thumbnail}
                alt={el.title}
              />
              <CardContent sx={{ display: 'flex', gap: '10px' }}>
                {
                  el.previews.map(img => (
                    <Avatar sx={{  }} variant="rounded" src={img} />
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