import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { styled } from '@mui/material/styles';
import { Box, Drawer, IconButton, FormControl, MenuItem, InputLabel, Select, CircularProgress } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { fetchRoute } from '@site/src/utils/route';
import MapContainer from './mapbox';
import Chart from './chart';
import RouteBox from './routebox';

const drawerHeight = 324;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    position: 'relative',
    height: '100%',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginBottom: `-${drawerHeight}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginBottom: 0,
    }),
  }),
);

export default function () {
  const [open, setOpen] = useState(false);
  const [orderBy, setOrderBy] = useState("");
  const [routeData, setRouteData] = useState();
  const [curRoute, setCurRoute] = useState('10935466900.gpx');
  const [loading, setLoading] = useState(false);

  // 电动车 🛵 自行车 🚴‍♀️ 跑步 🏃
  const routes = [
    { id: 1, slug: '10612773928.gpx', name: '上班路线高浪路+吴都路', type: '🛵', distance: 9.76, elevation: 68.6, color: '#a855f7',
      intro: '这是横跨经开和新吴区的上班路线，途径高浪路和吴都路两条主干道，横跨运河的高浪大桥，每天上下班时间穿梭着大量往来的人群。' },
    { id: 2, slug: '10839536771.gpx', name: '尚贤河市政府前段', type: '🏃', distance: 2.76, elevation: 16.6, color: '#409EFF',
      intro: '位于无锡市市政府前的这段围绕着尚贤河的步道，风景异常美丽，宏伟的市政府大楼，前面倚着山，后面傍着水。视野出奇的好。尤其当清风拂面，掠过水面，波光粼粼。' },
    { id: 3, slug: '10927881366.gpx', name: '周末骑行经开核心城区', type: '🚴‍♀️', distance: 11.3, elevation: 18, color: '#fc5200',
      intro: '这是一段经开的核心城区，聚集了市区的众多重大基建设施，包括博览中心、国际会议中心、美术馆（在建）、奥体中心（在建）。沿途道路宽广景色优美，非常适合骑行。' },
    { id: 4, slug: '10935466900.gpx', name: '金匮公园越野跑', type: '🏃', distance: 3.66, elevation: 43, color: '#67C23A',
      intro: '位于市政府前的金匮公园，人造的天然氧吧，高配置的跑步道，路径也十分的多样性，有一段是穿过山顶的路，海拔不过三四来米，一口气跑到山顶，酣畅淋漓。' }
  ];

  async function getRouteData (route) {
    setLoading(true);
    try {
      const data = await fetchRoute(route);
      console.log("load data")
      setRouteData(data);
    } catch (err) {
      console.log(err)
    } finally {
      setLoading(false)
    }
  };

  const getRouteColor = () => {
    return routes.find(el => el.slug === curRoute).color
  }

  const getRouteIntro = () => {
    return routes.find(el => el.slug === curRoute).intro
  }

  const getRouteList = () => {
    let orderKey;
    switch (orderBy) {
      case 'latest':
        orderKey = 'id';
        break;
      case 'longest':
        orderKey = 'distance';
        break;
      case 'elevest':
        orderKey = 'elevation';
        break;
      default:
        orderKey = 'id';
        break;
    }
    return routes.sort(function (a, b) {
      return b[orderKey] - a[orderKey]
    })
  }

  useEffect(() => {
    getRouteData(curRoute);
  }, [curRoute])

  const handleClickRoute = (route) => {
    setCurRoute(route);
  };

  return (
    <>
      <Head>
        <meta name="title" content='我的足迹' />
        <meta name="keywords" content='足迹,跑步,金城湾,尚贤湖,Strava,运动' />
      </Head>
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', backgroundColor: 'rgb(230, 228, 224)' }}>
        <Main open={open}>
          <aside className={styles.aside}>
            <div style={{ paddingTop: '0.75rem' }}>
              <nav className={styles.nav}>
                <Link to='/'><img src='/img/logo.svg' width='160' alt='spacexcode.com' /></Link>
              </nav>
              <header className={styles.header}>
                <h2>城市足迹</h2>
                <p>记录下自己在所住城市的一些深度走、跑步、骑行过的路径。👣</p>
              </header>
              <section className={styles.routerList}>
                <div className={styles.filterNav}>
                  <h3>所有路线</h3>
                  <FormControl size="small" sx={{ minWidth: 105, fontSize: '0.75rem' }}>
                    <InputLabel id="select-label" sx={{ fontSize: '14px' }}>排列顺序</InputLabel>
                    <Select
                      labelId="select-label"
                      value={orderBy}
                      label="排列顺序"
                      sx={{ '& > div': { paddingTop: '6px', paddingBottom: '6px', fontSize: '14px' } }}
                      onChange={(val) => setOrderBy(val.target.value)}
                    >
                      <MenuItem value='latest'>添加时间</MenuItem>
                      <MenuItem value='longest'>路程长度</MenuItem>
                      <MenuItem value='elevest'>海拔高度</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <ul>
                  {getRouteList().map(el => (
                    <RouteBox
                      route={el}
                      active={curRoute === el.slug}
                      loading={loading}
                      handleClickRoute={handleClickRoute}
                      handleClickMore={() => setOpen(true)}
                      key={el.slug}
                    />
                  ))}
                </ul>
              </section>
              <footer className={styles.footer}>
                A side project by <Link to='/author'>Timfan</Link>
              </footer>
            </div>
          </aside>
          <div className={styles.rightMap}>
            <MapContainer routeData={routeData} lineColor={getRouteColor()} />
          </div>
        </Main>
        <Drawer
          anchor='bottom'
          variant='persistent'
          sx={{
            height: drawerHeight,
            width: '100vw',
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              height: drawerHeight,
              boxSizing: 'border-box',
            },
          }}
          open={open}
          onClose={() => setOpen(false)}
        >
          <div className={styles.drwInner}>
            <div className={styles.drwhead}>
              <IconButton onClick={() => setOpen(false)}>
                <KeyboardArrowDownIcon />
              </IconButton>
            </div>
            <div className={styles.routeDetail}>
              <div className={styles.chartBox}>
                <Chart data={routeData?.chartData} width={500} height={220} />
              </div>
              <div className={styles.intro}>
                <ul>
                  <li>路程：{parseFloat(routeData?.distance.toFixed(2))} Km</li>
                  <li>海拔：{parseFloat(routeData?.elevation.toFixed(2))} m</li>
                </ul>
                <p>{getRouteIntro()}</p>
              </div>
            </div>
          </div>
        </Drawer>
      </Box>
    </>
  )
}
