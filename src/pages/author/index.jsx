import React from 'react';
import { useState, useEffect } from 'react'
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import ParallaxHoverTiltEffect from '@site/src/components/ParallaxHoverTiltEffect';
import { Grid, Avatar, Button, Box, Typography } from '@mui/material';
import styles from './style.module.scss';
import { Player } from '@site/src/pages/player/index'
import Lottie from 'react-lottie';
import * as animateRun from '@site/static/json/run.json'
import PinDropIcon from '@mui/icons-material/PinDrop';
import { RoughNotation } from 'react-rough-notation';
import CodeBlock from '@theme/CodeBlock';
import useTypeWriter from '@site/src/hooks/useTypeWriter';

import clsx from 'clsx';

function CodeTypeBlock() {
  const codeStr = `import React from 'react';
import ReactDOM from 'react-dom';

export const App = () => {
  return (
    <div>
      <h1>Welcome to Spacexcode.</h1>
      <p>Please remember the only link: 
"https://spacexcode.com"></p>
    </div>
  )
}
var mount = document.querySelector('#root');
ReactDOM.render(<App />, mount);`;

  function MagicWriter() {
    const typing = useTypeWriter(codeStr, null, () => {})
    return typing
  }

  return (
    <CodeBlock title='' language="jsx" className={styles.typeCodeBlock}>
      { MagicWriter() }
    </CodeBlock>
  )
}

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

  const [currentIndex, setCurrentIndex] = useState(0);

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
              '   <img src="/img/poi-marker-red.png" width="45">' +
              '</div>',
              offset: new AMap.Pixel(-50, -15)
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
    <Layout title='个人主页' description='编程范儿的个人主页'>
      <Head>
        <meta name="keywords" content='主页,太空编程,前端开发,编程范儿' />
      </Head>
      <Box className={styles.pageWrapper} sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ }}>
              <Avatar alt="Remy Sharp" sx={{ width: 184, height: 184, marginBottom: '2rem' }} src="/img/avatarLg.png" />
              <Typography variant="h3" sx={{ fontWeight: '700' }}>Timfan</Typography>
              <Typography variant="subtitle1" sx={{ fontWeight: '400' }}>前端开发工程师 👨&zwj;💻</Typography>
              <Typography variant="h6" sx={{ marginTop: '2rem' }}>Skills</Typography>
              <Box sx={{ marginTop: '15px', display: 'flex', flexWrap: 'wrap' }}>
                <img src="https://skillicons.dev/icons?i=js,css,typescript,jquery,vue,react,electron,nextjs,nodejs,nuxtjs,php,sass,webpack,vite,git,cs&theme=light&perline=6" alt="Personal Skills" />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={8}>
            <Box className={styles.bentoGrid}>
              <Box className={clsx(styles.gridItem, styles.map)} sx={{ padding: '0 !important' }}>
                <MapContainer />
              </Box>
              <Box className={clsx(styles.gridItem, styles.github)}>
                <div className={styles.gridBg} style={{ padding: 0 }}>
                  <Typography variant="body" sx={{ marginBottom: '2rem' }}>十年前端开发从业者，业余喜欢研究前沿的前端开发技术、前端产品的视觉交互体验，对产品感兴趣。
                  目前正在探索开发属于<RoughNotation type="underline" color='rgb(255, 213, 79, 0.8)' strokeWidth='2' multiline={true} show={true}>自己的小产品</RoughNotation>。</Typography>
                </div>
              </Box>
              <Box className={clsx(styles.gridItem, styles.twitter)}>
                <Typography variant="subtitle1" sx={{ marginBottom: '0.8rem' }}>你也可以从下面这些平台关注我的最新动态：</Typography>
                <Box>
                  <a className="button button--link button--sm" style={{ padding: '10px' }} href="https://github.com/fantingsheng" target="_blank">
                    <svg width="24" height="24" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="40" height="40" rx="10" fill="black"></rect>
                    <g clipPath="url(#clip0_920_2749)"><path fillRule="evenodd" clipRule="evenodd" d="M20 8C13.37 8 8 13.37 8 20C8 25.31 11.435 29.795 16.205 31.385C16.805 31.49 17.03 31.13 17.03 30.815C17.03 30.53 17.015 29.585 17.015 28.58C14 29.135 13.22 27.845 12.98 27.17C12.845 26.825 12.26 25.76 11.75 25.475C11.33 25.25 10.73 24.695 11.735 24.68C12.68 24.665 13.355 25.55 13.58 25.91C14.66 27.725 16.385 27.215 17.075 26.9C17.18 26.12 17.495 25.595 17.84 25.295C15.17 24.995 12.38 23.96 12.38 19.37C12.38 18.065 12.845 16.985 13.61 16.145C13.49 15.845 13.07 14.615 13.73 12.965C13.73 12.965 14.735 12.65 17.03 14.195C17.99 13.925 19.01 13.79 20.03 13.79C21.05 13.79 22.07 13.925 23.03 14.195C25.325 12.635 26.33 12.965 26.33 12.965C26.99 14.615 26.57 15.845 26.45 16.145C27.215 16.985 27.68 18.05 27.68 19.37C27.68 23.975 24.875 24.995 22.205 25.295C22.64 25.67 23.015 26.39 23.015 27.515C23.015 29.12 23 30.41 23 30.815C23 31.13 23.225 31.505 23.825 31.385C28.565 29.795 32 25.295 32 20C32 13.37 26.63 8 20 8Z" fill="white"></path></g><defs><clipPath id="clip0_920_2749"><rect width="24" height="24" fill="white" transform="translate(8 8)"></rect></clipPath></defs></svg>
                  </a>
                  <a className="button button--link button--sm" style={{ padding: '10px' }} href="https://twitter.com/fants0230" target="_blank">
                    <svg width="24" height="24" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>X</title><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
                  </a>
                  <a className="button button--link button--sm" style={{ padding: '10px' }} href="https://www.weibo.com/u/1832179583" target="_blank">
                    <svg width="24" height="24" viewBox="0 0 512 512" role="img" xmlns="http://www.w3.org/2000/svg"><title>Weibo</title><path d="M403.51 247.992c12.189-23.721 13.499-45.899 3.546-63.137-10.316-17.868-31.605-28.033-59.944-28.622-20.81-.427-44.439 4.311-68.131 13.528 8.166-27.851 5.532-49.961-7.876-63.369-16.113-16.113-44.899-16.666-81.056-1.558-33.715 14.088-70.764 40.33-104.325 73.889C35.742 228.706 2.534 286.681.945 326.653A75.672 75.672 0 0 0 0 338.441c0 35.793 25.09 69.017 70.648 93.547 43.858 23.617 101.979 36.622 163.656 36.622s119.798-13.005 163.656-36.622c45.558-24.53 70.648-57.754 70.648-93.547.001-34.374-23.032-66.257-65.098-90.449z" fill="#EA533B"/><path d="M260.338 459.932c-61.677 0-119.798-13.005-163.656-36.622-45.558-24.53-70.648-57.754-70.648-93.547 0-3.863.318-7.825.945-11.787 1.589-39.973 34.797-97.947 84.78-147.93 33.227-33.226 69.87-59.27 103.314-73.458-7.854 1.823-16.218 4.566-25.023 8.245-33.715 14.088-70.764 40.33-104.325 73.889C35.742 228.707 2.534 286.682.945 326.654A75.65 75.65 0 0 0 0 338.441c0 35.793 25.09 69.017 70.648 93.547 43.858 23.617 101.979 36.622 163.656 36.622 48.616 0 95.016-8.086 133.969-23.074-32.921 9.405-69.744 14.396-107.935 14.396z" fill="#D93C1C"/><path d="M364.19 312.032c-2.568-29.565-22.081-55.61-54.944-73.338-31.681-17.091-72.302-24.49-114.382-20.835-42.079 3.656-80.818 17.949-109.076 40.247-29.314 23.131-44.045 52.151-41.476 81.715 2.569 29.565 22.082 55.61 54.946 73.338 26.389 14.236 58.976 21.748 93.447 21.747 6.913 0 13.905-.302 20.934-.913 42.079-3.654 80.817-17.948 109.075-40.246 29.315-23.131 44.044-52.151 41.476-81.715z" fill="#FFFFFF"/><path d="M230.36 425.319a241.87 241.87 0 0 1-20.934.913c-34.471.001-67.059-7.511-93.447-21.747-32.863-17.729-52.378-43.774-54.946-73.338-2.569-29.564 12.161-58.584 41.476-81.715 5.799-4.575 12.046-8.808 18.665-12.687-12.993 5.932-24.911 13.095-35.388 21.361-29.314 23.131-44.045 52.151-41.476 81.715 2.569 29.565 22.082 55.61 54.946 73.338 26.389 14.236 58.976 21.748 93.447 21.747 6.913 0 13.905-.302 20.934-.913 33.445-2.905 64.771-12.535 90.41-27.559-22.053 10.069-47.206 16.585-73.687 18.885z" fill="#E5E5E5"/><path d="M286.65 312.533c-9.507-39.544-55.55-62.508-102.638-51.189-47.088 11.32-77.661 52.703-68.156 92.249 4.682 19.473 18.156 35.492 37.943 45.105 12.283 5.967 26.102 9.003 40.355 9.003 8.042 0 16.221-.967 24.339-2.918 47.089-11.321 77.664-52.703 68.157-92.25z" fill="#333333"/><circle cx="177.898" cy="351.457" r="30.373" fill="#FFFFFF" /><g fill="#FFA929"><path d="M373.152 117.153c-7.189 0-13.017 5.828-13.017 13.017 0 7.189 5.828 13.017 13.017 13.017 26.318 0 47.729 21.411 47.729 47.729 0 7.189 5.828 13.017 13.017 13.017s13.017-5.828 13.017-13.017c-.001-40.673-33.091-73.763-73.763-73.763z" /><path d="M364.475 43.39c-3.261 0-6.564.108-9.817.322-9.564.629-16.808 8.893-16.18 18.458.629 9.564 8.9 16.804 18.458 16.18a115.6 115.6 0 0 1 7.539-.248c62.206 0 112.813 50.608 112.813 112.813 0 7.606-.759 15.204-2.257 22.581-1.396 6.875 1.691 14.209 7.576 18.025 5.99 3.884 14.111 3.587 19.829-.675 3.388-2.525 5.774-6.307 6.614-10.445a148.538 148.538 0 0 0 2.95-29.487c0-81.343-66.18-147.524-147.525-147.524z" /></g><circle cx="234.305" cy="321.085" r="17.356" fill="#FFFFFF" /></svg>
                  </a>
                  <a className="button button--link button--sm" style={{ padding: '10px' }} href="https://www.instagram.com/timfan63" target="_blank">
                    <svg role="img" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#E4405F"><title>Instagram</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" fill="#E4405F" ></path></svg>
                  </a>
                </Box>
              </Box>
              <Box className={clsx(styles.gridItem, styles.weibo)}>
                <div className={styles.gridBg}>
                  <Typography variant="body1" sx={{ marginBottom: '2rem' }}>用智慧选择目标，用智能实现目标。💫</Typography>
                  <Typography variant="caption" sx={{ textAlign: 'right', display: 'block' }}>-- Sam Altman</Typography>
                </div>
              </Box>
              <Box className={clsx(styles.gridItem, styles.pkg)} sx={{ padding: '0 !important' }}>
                <div className={styles.gridBg} style={{ padding: '0' }}>
                  <CodeTypeBlock />
                </div>
              </Box>
              <Box className={clsx(styles.gridItem, styles.player)} sx={{ padding: '0 !important' }}>
                <div style={{ height: '100%', padding: '20px', position: 'relative', display: 'flex', alignItems: 'center' }}>
                  <Player
                    songList={songList}
                    currentIndex={currentIndex}
                    changeCurrentIndex={ val => setCurrentIndex(val)}
                    hasBg={false}
                  />
                </div>
              </Box>
              <ParallaxHoverTiltEffect className={clsx(styles.gridItem, styles.photo)} options={{
                reverse: false,
                max: 15,
                perspective: 5000,
                easing: 'cubic-bezier(.03,.98,.52,.99)',
                scale: '1.02',
                speed: '5000',
                transition: true,
                axis: null,
                reset: true
              }}>
                <div className={styles.photo} style={{ backgroundImage: 'url(https://spacexcode.oss-cn-hangzhou.aliyuncs.com/1704520822305-e5dd2a34-5ef4-4dfd-9063-dd7074e59656.jpg)' }}></div>
              </ParallaxHoverTiltEffect>
              <Box className={clsx(styles.gridItem, styles.tool)} sx={{  }}>
                <div className={styles.list}>
                  <Typography variant="body1" sx={{ marginBottom: '0.8rem', fontWeight: '400' }}>
                    由于经常分享和写作需要配图，便开发了几款图片导出工具，我的产品之路将从这些小工具开始。
                  </Typography>
                  <ul>
                    <li><Link to="/screenshot">图片套壳美化</Link></li>
                    <li><Link to="/coverview">封面图生成</Link></li>
                    <li><Link to="/memocard">文字卡片生成</Link></li>
                    <li><Link to="/codeimage">代码图片生成</Link></li>
                  </ul>
                </div>
              </Box>
              <Box className={clsx(styles.gridItem, styles.router)}>
                <Box sx={{ display: 'flex', gap: '15px' }}>
                  <Box sx={{ width: '70%' }}>
                    <Typography variant="body1">我还偶尔骑行和跑步，为了督促自己，特意开发了一个展示跑步路线的页面，
                      几年下来也积累了数条无锡这座城市非常适合跑步的路线。</Typography>
                    <Button variant="text" sx={{ marginTop: '10px' }} href="/routes" startIcon={<PinDropIcon />}>足迹</Button>
                  </Box>
                  <Lottie
                    options={{
                      loop: true,
                      autoplay: true,
                      animationData: animateRun,
                      rendererSettings: {
                        preserveAspectRatio: 'xMidYMid slice'
                      }
                    }}
                    height={120}
                    width={120}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}
