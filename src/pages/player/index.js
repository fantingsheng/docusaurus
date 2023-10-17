import React from 'react';
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import Drawer from '@mui/material/Drawer';

import Player from './player';
import MusicQueue from './musicQueue';



export default function () {
  const songList = [
    {
      artists: '林俊杰',
      name: '那女孩对我说',
      avatar: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1697270523238-8b4b11a5-b5a3-4ac3-b6bd-1e264f526c76.png',
      link: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/mp3/那女孩对我说.mp3',
      lyric: '心很空 天很大 云很重 我很孤单'
    },
    {
      artists: '张靓颖',
      name: '终于等到你',
      avatar: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1697503257045-7a262b7d-0df0-4005-a69c-2a645ac24c27.png',
      link: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/mp3/终于等到你-张靓颖.mp3',
      lyric: '到了某个年纪你就会知道 一个人的日子真的难熬'
    },
    {
      artists: '张靓颖',
      name: '饿狼传说',
      avatar: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1697503257045-7a262b7d-0df0-4005-a69c-2a645ac24c27.png',
      link: 'https://spacexcode.oss-cn-hangzhou.aliyuncs.com/mp3/饿狼传说-张靓颖.mp3',
      lyric: '她熄掉晚灯 幽幽掩两肩 交织了火花 拘禁在沉淀'
    }
  ];

  const [open, setOpen] = React.useState(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);

  return (
    <Layout title='聆听音乐' description='闲暇时，让音乐作伴 🎵'>
      <Head>
        <meta name='keywords' content='音乐, mp3' />
      </Head>
      <Player
        openDraw={() => setOpen(true)}
        songList={songList}
        currentIndex={currentIndex}
        changeCurrentIndex={ val => setCurrentIndex(val)} />
      <Drawer
        anchor='bottom'
        open={open}
        onClose={() => setOpen(false)}
      >
        <MusicQueue
          currentIndex={currentIndex}
          songList={songList}
          changeCurrentIndex={ val => setCurrentIndex(val)} />
      </Drawer>
    </Layout>
  )
}