import React from 'react';
import Layout from '@theme/Layout';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent, TimelineDot } from '@mui/lab';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
import ElectricBikeIcon from '@mui/icons-material/ElectricBike';
import RiceBowlIcon from '@mui/icons-material/RiceBowl';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import BathtubIcon from '@mui/icons-material/Bathtub';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import LightModeIcon from '@mui/icons-material/LightMode';
import { Typography } from '@mui/material';

function OneDayTimeline () {
  const timelineData = [
    { id: 1, time: '6:45 am', icon: <LightModeIcon />, color: 'secondary', variant: 'filled', align: 'right', title: '起床', intro: '定了闹钟 ⏰，一般会在五分钟后起床'},
    { id: 2, time: '7:15 am', icon: <ElectricBikeIcon />, color: 'primary', variant: 'filled', align: 'right', title: '上班', intro: '通勤以小电驴为主 🛵'},
    { id: 3, time: '8:00 am', icon: <FastfoodIcon />, color: 'secondary', variant: 'filled', align: 'right', title: '早餐', intro: '早餐必须要吃，保证一上午有充足的能量'},
    { id: 4, time: '8:30 am', icon: <LaptopMacIcon />, color: 'primary', variant: 'filled', align: 'right', title: '工作', intro: '一天的工作开始了'},
    { id: 5, time: '10:00 am', icon: <FastfoodIcon />, color: 'secondary', variant: 'filled', align: 'right', title: '间歇休息 ♨️', intro: '站起来活动下，泡杯咖啡'},
    { id: 6, time: '11:50 am', icon: <RiceBowlIcon />, color: 'secondary', variant: 'filled', align: 'right', title: '午饭', intro: '午饭很重要哦'},
    { id: 7, time: '12:30 am', icon: <FastfoodIcon />, color: 'secondary', variant: 'filled', align: 'right', title: '午睡', intro: '中午休息片刻，能够保证下午精力充沛'},
    { id: 8, time: '13:00 am', icon: <LaptopMacIcon />, color: 'primary', variant: 'filled', align: 'right', title: '工作', intro: '下午的工作时间开始了'},
    { id: 9, time: '15:00 am', icon: <LaptopMacIcon />, color: 'primary', variant: 'filled', align: 'right', title: '间歇休息', intro: '起来活动下吧'},
    { id: 10, time: '17:30 am', icon: <DirectionsBikeIcon />, color: 'primary', variant: 'outlined', align: 'right', title: '下班', intro: '结束了一天的工作'},
    { id: 11, time: '18:30 am', icon: <LaptopMacIcon />, color: 'primary', variant: 'filled', align: 'right', title: '遛娃', intro: '回到家中，陪伴孩子'},
    { id: 12, time: '19:30 am', icon: <RamenDiningIcon />, color: 'primary', variant: 'filled', align: 'right', title: '晚餐', intro: '晚餐时间'},
    { id: 13, time: '20:30 am', icon: <FitnessCenterIcon />, color: 'primary', variant: 'filled', align: 'right', title: '娱乐 + 锻炼', intro: '和孩子一起做些活动，偶尔会做些运动'},
    { id: 14, time: '21:30 am', icon: <BathtubIcon />, color: 'secondary', variant: 'filled', align: 'right', title: '冲澡', intro: '冲去一天的疲惫'},
    { id: 15, time: '22:30 am', icon: <LaptopMacIcon />, color: 'primary', variant: 'filled', align: 'right', title: '学习', intro: '学习一些工作之外的技术和能力'},
    { id: 16, time: '23:30 am', icon: <HotelIcon />, color: 'primary', variant: 'outlined', align: 'right', title: '睡觉', intro: '🌛 进入睡眠'}
  ]
  return (
    <Timeline position="alternate">
      {
        timelineData.map(item => (
          <TimelineItem key={item.id}>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              {item.time}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color={item.color} variant={item.variant}>{item.icon}</TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                {item.title}
              </Typography>
              <Typography>{item.intro}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))
      }
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <RepeatIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">Repeat</Typography>
          <Typography>让我们一起打造高效的生物钟</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default function Index() {
  return (
    <Layout
      title='打造高效的生物钟'
      description='追求效率，借助杠杆'>
      <main>
        <div className='container padding-vert--lg'>
          <OneDayTimeline />
        </div>
      </main>
    </Layout>
  );
}
