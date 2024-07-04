import { Box, Card, CardHeader, CardMedia, CardContent, Typography, ToggleButtonGroup, ToggleButton, Divider } from '@mui/material';
import { useState } from 'react';

export default function MockupModel({ handleSelChange }) {
  const [platform, setPlatform] = useState("all");

  return (
    <Box>
      <ToggleButtonGroup
        color="primary"
        value={platform}
        exclusive
        onChange={(e, val) => setPlatform(val)}
        aria-label="Platform"
      >
        <ToggleButton value="all">所有</ToggleButton>
        <ToggleButton value="phone">手机</ToggleButton>
        <ToggleButton value="tablet">平板</ToggleButton>
        <ToggleButton value="laptop">笔记本</ToggleButton>
        <ToggleButton value="desktop">台式</ToggleButton>
        <ToggleButton value="watch">手表</ToggleButton>
      </ToggleButtonGroup>
      <Divider sx={{ margin: '10px 0' }} />
      <Box sx={{ display: 'grid', gap: '10px', gridTemplateColumns: 'repeat(2, 1fr)' }}>
      <Card sx={{ maxWidth: 285, backgroundColor: '#fff' }}>
        <CardHeader
          title="Screenshot"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="124"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. 
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ maxWidth: 285, backgroundColor: '#fff' }}>
        <CardHeader
          title="Screenshot"
          subheader="September 14, 2016"
        />
        <CardMedia
          component="img"
          height="124"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to cook
            together with your guests. 
          </Typography>
        </CardContent>
      </Card>
      </Box>
    </Box>
  )
}