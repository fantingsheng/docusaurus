import React, { useState, useEffect } from 'react';
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
import CoffeeIcon from '@mui/icons-material/Coffee';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import EscalatorWarningIcon from '@mui/icons-material/EscalatorWarning';
import AirlineSeatFlatAngledIcon from '@mui/icons-material/AirlineSeatFlatAngled';
import LocalLibrarySharpIcon from '@mui/icons-material/LocalLibrarySharp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import GiscusComponent from '@site/src/components/GiscusComponent';
import Divider from '@mui/material/Divider';
import styles from './style.module.scss';

function OneDayTimeline ({ timeStr }) {
  // color: ['success', 'error', 'primary', 'secondary', 'info', 'warning']
  // variant: ['filled', 'outlined', 'rounded', 'two tone', 'sharp']
  const timelineData = [
    { id: 1, time: '6:45 am', icon: <LightModeIcon />, color: 'warning', variant: 'filled', align: 'right', title: '起床', intro: '定了六点四十的闹钟 ⏰，一般会在五分钟后起床'},
    { id: 2, time: '7:15 am', icon: <ElectricBikeIcon />, color: 'info', variant: 'outlined', align: 'right', title: '上班', intro: '通勤以小电驴为主 🛵'},
    { id: 3, time: '8:00 am', icon: <FastfoodIcon />, color: 'secondary', variant: 'filled', align: 'right', title: '早餐', intro: '早餐是三餐中最重要的一餐必须要吃，而且尽量丰富营养些，这样保证一上午有充足的能量'},
    { id: 4, time: '8:30 am', icon: <LaptopMacIcon />, color: 'primary', variant: 'filled', align: 'right', title: '工作', intro: '一天的工作从此刻开始了，可以来点仪式感，整理下今天的工作目标'},
    { id: 5, time: '10:00 am', icon: <CoffeeIcon />, color: 'warning', variant: 'filled', align: 'right', title: '间歇休息', intro: '站起来活动下，做个拉伸，泡杯咖啡 ♨️'},
    { id: 6, time: '11:50 am', icon: <RiceBowlIcon />, color: 'secondary', variant: 'filled', align: 'right', title: '午饭', intro: '要吃的营养，要吃的好，要吃得饱，为下午继续工作提供必要的能量'},
    { id: 7, time: '12:30 am', icon: <AirlineSeatFlatAngledIcon sx={{ fontSize: '32px' }} />, color: 'primary', variant: 'filled', align: 'right', title: '午睡', intro: '中午休息片刻，能够保证下午精力充沛，时间在半小时左右最佳'},
    { id: 8, time: '13:00 pm', icon: <LaptopMacIcon />, color: 'success', variant: 'filled', align: 'right', title: '工作', intro: '午睡过后，身体解乏，可以好好地进行工作了'},
    { id: 9, time: '15:00 pm', icon: <EmojiPeopleIcon />, color: 'primary', variant: 'filled', align: 'right', title: '间歇休息', intro: '起来活动下吧，或听听音乐放松放松'},
    { id: 10, time: '17:30 pm', icon: <DirectionsBikeIcon />, color: 'primary', variant: 'outlined', align: 'right', title: '下班', intro: '结束了一天的工作，利用路上的通勤时间，好好呼吸户外的空气'},
    { id: 11, time: '18:35 pm', icon: <EscalatorWarningIcon />, color: 'secondary', variant: 'filled', align: 'right', title: '遛娃', intro: '回到家中，陪伴家人孩子'},
    { id: 12, time: '19:30 pm', icon: <RamenDiningIcon />, color: 'warning', variant: 'filled', align: 'right', title: '晚餐', intro: '晚餐是三餐中唯一可以和家人好好聚在一起吃饭的时候，要尽可能营造温馨的氛围'},
    { id: 13, time: '20:30 pm', icon: <FitnessCenterIcon />, color: 'info', variant: 'filled', align: 'right', title: '娱乐 + 锻炼', intro: '出去散散步或者和孩子一起做些运动，晚上跑跑步也不错'},
    { id: 14, time: '21:30 pm', icon: <BathtubIcon />, color: 'secondary', variant: 'filled', align: 'right', title: '冲澡', intro: '洗个热水澡，可以冲去一天的疲惫'},
    { id: 15, time: '22:30 pm', icon: <LocalLibrarySharpIcon />, color: 'error', variant: 'filled', align: 'right', title: '学习', intro: '补充学习一些工作之外的用到的技术和能力，拓展自己的知识边界'},
    { id: 16, time: '23:30 pm', icon: <HotelIcon />, color: 'primary', variant: 'filled', align: 'right', title: '睡觉', intro: '关掉一切光源，🌛 让自己的身体快速进入睡眠状态'}
  ]

  const checkRight = (t) => {
    if (t) {
      const time = t.slice(0, t.length - 3);
      if (timeStr.indexOf(time) > -1) {
        return true;
      }
    }
    return false;
  }

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
              <TimelineDot className={checkRight(item.time) ? styles.flashing : ''} color={item.color} variant={item.variant}>{item.icon}</TimelineDot>
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
          <Typography>让我们一起践行打造高效的生物钟吧</Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

function Banner ({ timeStr }) {
  return (
    <div className='card margin-bottom--lg'>
      <div className='card__body'>
        <div className='text--center'>
          <p style={{
            fontSize: '24px',
            display: 'border-box',
            lineHeight: '1.2rem',
            letterSpacing: '0.1rem',
            WebkitBoxReflect: 'below 3px linear-gradient(transparent, rgba(0, 0, 0, .3))'
          }}>{ timeStr }</p>
          <p style={{ lineHeight: '2rem', marginBottom: '10px' }}>
            世界上唯一公平的事是每个人一天24小时<br />
            而如何度过这24小时，却有千万种方式<br />
            选择什么样的生物钟，将决定你拥有什么样的人生
          </p>
        </div>
      </div>
    </div>
  )
}

function AskQuestion () {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className='margin-vert--xl'>
      <Accordion sx={{ backgroundColor: '#fff', boxShadow: 'none' }} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>城市白领就像扫地机器人，每天按固定线路跑工作量，下班回出租屋充电</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ backgroundColor: '#fff', boxShadow: 'none' }} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>城市白领就像扫地机器人，每天按固定线路跑工作量，下班回出租屋充电</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nulla facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
            Aliquam eget maximus est, id dignissim quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default function Index() {
  const [ntime, setNtime] = useState(new Date())

  const tick = () => {
    setNtime(new Date());
  }

  useEffect(() => {
    const intervalId = setInterval(() => tick(), 1000);
    return () => clearInterval(intervalId);
  }, [])

  return (
    <Layout
      title='打造高效的生物钟'
      description='生物钟是控制你的身体在一天内不同时间段活动和休息的内部机制，它受到自然光线、饮食、锻炼等各种外在因素的影响。'>
      <main>
        <div className='container padding-vert--lg'>
          <div className='row'>
            <div className='col col--6 col--offset-3'>
              <Banner timeStr={ntime.toLocaleTimeString().split(':').join(' : ') } />
            </div>
          </div>
          <div className='row'>
            <div className='col col--10 col--offset-1'>
              <div className='text--center'>
                <h3>我一天的时间安排</h3>
              </div>
              <OneDayTimeline timeStr={ntime.toLocaleTimeString()} />
            </div>
          </div>
          <div className='row'>
            <div className='col col--12'>
              {/* <AskQuestion /> */}
            </div>
          </div>
          <div className='row'>
            <div className='col col--12 margin-top--lg'>
              <Divider>您有什么好的建议，欢迎评论区留言 💬</Divider>
            </div>
          </div>
          <div className='row'>
            <div className='col col--10 col--offset-1'>
              <GiscusComponent />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
