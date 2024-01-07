import React from 'react';
import { useState, useEffect } from 'react'
import Layout from '@theme/Layout';
import Head from '@docusaurus/Head';
import BrowserOnly from '@docusaurus/BrowserOnly';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { styled } from '@mui/material/styles';
import { Grid, Avatar, Paper, Box, Typography } from '@mui/material';
import styles from './style.module.scss';
// import AMapLoader from "@amap/amap-jsapi-loader";
import { Player } from '@site/src/pages/player/index'

export default function Main () {
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
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
    borderRadius: '20px',
    boxShadow: '0 2px 4px rgba(0,0,0,.04)',
    border: '1px solid rgba(0,0,0,.08)',
    overflow: 'hidden',
  }));

  function MapContainer() {
    let map = null;
   
    useEffect(() => {
       if (ExecutionEnvironment.canUseDOM) {
        import("@amap/amap-jsapi-loader").then(AMapLoader => {
        AMapLoader.load({
          key: "f92d916868bf43323d76c1f76702d2a6", // 申请好的Web端开发者Key，首次调用 load 时必填
          version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
          plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
        })
          .then((AMap) => {
            map = new AMap.Map("container", {
              viewMode: "3D", // 是否为3D地图模式
              zoom: 11, // 初始化地图级别
              center: [120.325121, 31.498017], // 初始化地图中心点位置
            });
            const marker = new AMap.Marker({
              position: new AMap.LngLat(120.325121, 31.498017),
              content: '<div class="custom-content-marker">' +
              '   <img src="/img/poi-marker-red.png" width="30">' +
              '</div>',
              offset: new AMap.Pixel(-40, -20)
            })
            map.add(marker);
          })
          .catch((e) => {
            console.log(e);
          });
        })
      }
      return () => {
        map?.destroy();
      };
    }, []);
  
    return (
      <div
        id="container"
        className={styles.container}
        style={{ height: "100%", width: "100%" }}
      ></div>
    );
  }

  return (
    <Layout title='个人主页' description='个人主页'>
      <Head>
        <meta name="keywords" content='主页' />
      </Head>
      <Box sx={{ flexGrow: 1, padding: '4rem' }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Box sx={{ padding: '0 20px' }}>
              <Avatar alt="Remy Sharp" sx={{ width: 184, height: 184, marginBottom: '2rem' }} src="/img/avatarLg.png" />
              <Typography variant="h3" sx={{ fontWeight: '700' }}>Timfan</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '400' }}>前端开发工程师 👨&zwj;💻</Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box sx={{ width: '100%', display: 'block' }}>
              <div className={styles.bentoGrid}>
                <Item sx={{ height: 200, width: 200 }}>
                  <Box sx={{ marginBottom: '0.5rem' }}>
                    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="40" height="40" rx="10" fill="black"></rect>
                      <g clipPath="url(#clip0_920_2749)"><path fillRule="evenodd" clipRule="evenodd" d="M20 8C13.37 8 8 13.37 8 20C8 25.31 11.435 29.795 16.205 31.385C16.805 31.49 17.03 31.13 17.03 30.815C17.03 30.53 17.015 29.585 17.015 28.58C14 29.135 13.22 27.845 12.98 27.17C12.845 26.825 12.26 25.76 11.75 25.475C11.33 25.25 10.73 24.695 11.735 24.68C12.68 24.665 13.355 25.55 13.58 25.91C14.66 27.725 16.385 27.215 17.075 26.9C17.18 26.12 17.495 25.595 17.84 25.295C15.17 24.995 12.38 23.96 12.38 19.37C12.38 18.065 12.845 16.985 13.61 16.145C13.49 15.845 13.07 14.615 13.73 12.965C13.73 12.965 14.735 12.65 17.03 14.195C17.99 13.925 19.01 13.79 20.03 13.79C21.05 13.79 22.07 13.925 23.03 14.195C25.325 12.635 26.33 12.965 26.33 12.965C26.99 14.615 26.57 15.845 26.45 16.145C27.215 16.985 27.68 18.05 27.68 19.37C27.68 23.975 24.875 24.995 22.205 25.295C22.64 25.67 23.015 26.39 23.015 27.515C23.015 29.12 23 30.41 23 30.815C23 31.13 23.225 31.505 23.825 31.385C28.565 29.795 32 25.295 32 20C32 13.37 26.63 8 20 8Z" fill="white"></path></g><defs><clipPath id="clip0_920_2749"><rect width="24" height="24" fill="white" transform="translate(8 8)"></rect></clipPath></defs></svg>
                  </Box>
                  <Typography variant="subtitle1" sx={{ marginBottom: '2rem', fontWeight: '500' }}>Timfan</Typography>
                  <a className="button button--secondary" href="https://github.com/fantingsheng" target="_blank">Follow</a>
                </Item>
                <Item sx={{ height: 200, width: 200 }}>
                  <Box sx={{ marginBottom: '0.5rem' }}>
                    <svg width="40" height="40" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                    </Box>
                  <Typography variant="subtitle1" sx={{ marginBottom: '2rem', fontWeight: '500' }}>@fants0230</Typography>
                  <a className="button button--info" href="https://github.com/fantingsheng" target="_blank">Follow</a>
                </Item>
                <Item sx={{ height: 330, width: 200, padding: '0' }}>
                  <div className={styles.photo} style={{ backgroundImage: 'url(https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1704520822305-e5dd2a34-5ef4-4dfd-9063-dd7074e59656.jpg)' }}></div>
                </Item>
                <Item sx={{ height: 200, width: 200 }}>
                  <Box sx={{ marginBottom: '0.5rem' }}>
                    <div className={styles.siteIcon}>
                      <img src="/img/share.png" alt="spacexcode" />
                    </div>
                  </Box>
                  <Typography variant="subtitle2" sx={{ marginBottom: '0.5rem', fontWeight: '700' }}>欢迎来到太空编程 | 太空编程</Typography>
                  <Typography variant="caption" sx={{ marginBottom: '0.5rem' }}>分享硬核的编程知识</Typography>
                  <a className="button button--link" style={{ padding: '5px 0', fontWeight: '400' }} href="https://github.com/fantingsheng" target="_blank">https://spacexcode.com</a>
                </Item>
                <Item sx={{ height: 140, width: 200, padding: '0' }}>
                  <div className={styles.gridBg}>
                    <Typography variant="body1" sx={{ marginBottom: '2rem', fontWeight: '500' }}>用智慧选择目标，用智能实现目标</Typography>
                    <Typography variant="caption" sx={{ textAlign: 'right', display: 'block' }}>-- Sam Altman</Typography>
                  </div>
                </Item>
                <Item className={styles.colSpan2} sx={{ height: 320, width: 'calc(400px + 2rem)', padding: '0' }}>
                  <div style={{ height: '100%', position: 'relative', display: 'flex', alignItems: 'center' }}>
                    <Player
                      songList={songList}
                      currentIndex={currentIndex}
                      changeCurrentIndex={ val => setCurrentIndex(val)} 
                    />
                  </div>
                </Item>
                <Item sx={{ height: 400, width: 200, padding: '0' }}>
                  <MapContainer />
                </Item>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}
