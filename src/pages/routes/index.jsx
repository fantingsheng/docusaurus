import React, { useEffect, useState, useRef } from 'react';
import styles from './style.module.scss';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import { styled } from '@mui/material/styles';
import { Box, Drawer, IconButton, FormControl, MenuItem, InputLabel, Select } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { fetchRoute } from '@site/src/utils/route';
import gcoord from 'gcoord';
import * as d3 from 'd3';

const drawerHeight = 324;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    position: 'relative',
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

function MapContainer({ routeData, lineColor }) {
  let map = null;
  const [amap, setAmap] = useState();
  const [mapImpl, setMapImpl] = useState();
  
  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM && routeData) {
      window._AMapSecurityConfig = {
        securityJsCode: '9eacf9618d78d0ee65d219c5ae35813b'
      }
      import("@amap/amap-jsapi-loader").then(AMapLoader => {
      AMapLoader.load({
        key: "f92d916868bf43323d76c1f76702d2a6", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          setAmap(AMap)
          map = new AMap.Map("container", {
            viewMode: "3D", // 是否为3D地图模式
            zoom: 14, // 初始化地图级别
            center: [120.325121, 31.498017], // 初始化地图中心点位置
          });
          setMapImpl(map);
          const marker = new AMap.Marker({
            position: new AMap.LngLat(120.325121, 31.498017),
            content: '<div class="custom-content-marker">' +
            '   <img src="/img/poi-marker-red.png" width="30">' +
            '</div>',
            offset: new AMap.Pixel(-50, -15)
          })
          map.add(marker);
          DrawRouteLine(map, AMap, lineColor);
        })
        .catch((e) => {
          console.log(e);
        });
      })
    }
    return () => {
      map?.destroy();
    };
  }, [routeData]);

  function DrawRouteLine (map, AMap, lineColor) {
    const originLnglats = routeData.geoJson.features[0].geometry.coordinates;
    const centerLnglat = gcoord.transform(
      [originLnglats[Math.floor(originLnglats.length / 2)][0], originLnglats[Math.floor(originLnglats.length / 2)][1]], // 经纬度坐标
      gcoord.WGS84, // 当前坐标系
      gcoord.GCJ02 // 目标坐标系
    );
    map.setCenter(centerLnglat)
    console.log('routeData', routeData)
    
    let lnglats = [];
    originLnglats.forEach(async el => {
      lnglats.push(gcoord.transform(
        [el[0], el[1]], // 经纬度坐标
        gcoord.WGS84, // 当前坐标系
        gcoord.GCJ02 // 目标坐标系
      ));
    })  
    console.log("lnglats", lnglats);

    const polyline = new AMap.Polyline({
      strokeColor: lineColor,
      strokeWeight: 4,
      strokeOpacity: 1,
      cursor: 'pointer',
      path: lnglats
    })
    map.add(polyline);
  }

  return (
    <div
      id="container"
      className={styles.container}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}

function RouteChart({ data, xName = 'x', yName = 'y', ymax }) {

  const width = 600;
  const height = 220;
  const marginTop = 20;
  const marginRight = 20;
  const marginBottom = 20;
  const marginLeft = 20;

  const svgRef = useRef(null);

  useEffect(() => {
    if (data && svgRef.current) {
      const svg = d3.select(svgRef.current);
      svg.selectAll("*").remove();

      // 创建比例尺
      const xScale = d3.scaleLinear(d3.extent(data, d => d[xName]), [marginLeft, width - marginRight]);
      const yScale = d3.scaleLinear([0, d3.max(data, d => d[yName])], [height - marginBottom, marginTop]);
      
      const xAxis = d3.axisBottom(xScale).ticks(width / 80).tickSizeOuter(0).tickFormat(val => val + 'm');
      const yAxis = d3.axisLeft(yScale).ticks(height / 40);
      // 绘制坐标轴
      svg
        .append('g')
        .attr('transform', `translate(0, ${height - marginBottom})`)
        .call(xAxis);
      
      svg
        .append('g')
        .attr('transform', `translate(${marginLeft}, 0)`)
        .call(yAxis)
        .call(g => g.append("text")
          .attr("x", -marginLeft)
          .attr("y", 10)
          .attr("fill", "#6b716a")
          .attr("text-anchor", "start")
          .text("海拔 (m)"));
      // 创建折线生成器
      const line = d3
        .line()
        .x(d => xScale(d[xName]))
        .y(d => yScale(d[yName]));
      
      svg
        .append('path')
        .datum(data)
        .attr('class', 'line')
        .attr('d', line)
        .attr('fill', "url(#line-gradient)")
        .attr('stroke', '#383c93')
        .attr('stroke-width', 1);

      // const tooltip = d3.select("body").append("div").attr("class", styles.tooltip).style("opacity", 0);
      // svg.on("mousemove", function(evt) {
      //   console.log("mousemove", evt)
      //   tooltip.transition()
      //     .duration(200)
      //     .style("opacity", .9);
      //   tooltip.html("距离，海拔")
      //     .style("left", (evt.pageX) + "px")
      //     .style("top", (evt.pageY - 28) + "px");
      // });
      
      // svg.on("mouseout", function() {
      //   tooltip.transition()
      //     .duration(500)
      //     .style("opacity", 0);
      // });

    }
  }, [data, svgRef.current]);

  return <svg ref={svgRef} width={width} height={height}></svg>;
}

export default function () {
  const [open, setOpen] = useState(false);
  const [orderBy, setOrderBy] = useState("");
  const [routeData, setRouteData] = useState();
  const [curRoute, setCurRoute] = useState('10839536771.gpx')

  // 电动车 🛵 自行车 🚴‍♀️ 跑步 🏃
  const routes = [
    { id: 1, slug: '10612773928.gpx', name: '上班路线高浪路+吴都路', type: '🛵', distance: 9.76, elevation: 68.6, color: '#a855f7',
      intro: '这是横跨经开和新吴区的上班路线，途径高浪路和吴都路两条主干道，横跨运河的高浪大桥，每天上下班时间穿梭着大量往来的人群。' },
    { id: 2, slug: '10839536771.gpx', name: '尚贤河市政府前段', type: '🏃', distance: 2.76, elevation: 16.6, color: '#409EFF',
      intro: '位于无锡市市政府前的这段围绕着尚贤河的步道，风景异常美丽，宏伟的市政府大楼，前面倚着山，后面傍着水。视野出奇的好。尤其当清风拂面，掠过水面，波光粼粼。' }
  ];

  async function getRouteData (route) {
    const data = await fetchRoute(route);
    console.log('data', data);
    setRouteData(data);
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
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100vw', backgroundColor: 'rgb(230, 228, 224)' }}>
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
                    <li style={{ borderColor: curRoute === el.slug ? el.color : '#e0e4e0' }} key={el.slug} onClick={() => handleClickRoute(el.slug)}>
                      <div className={styles.rhead}>
                        <p><span className={styles.dot} style={{ backgroundColor: el.color }}></span>{el.name}</p>
                        <span className={styles.mode}>{el.type}</span>
                      </div>
                      <ol>
                        <li>
                          <span>路程 (Distance)</span>
                          <strong>{el.distance} km</strong>
                        </li>
                        <li>
                          <span>海拔 (Elevation)</span>
                          <strong>{el.elevation} m</strong>
                        </li>
                      </ol>
                      <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='currentColor' className={styles.moreBtn} onClick={() => setOpen(true)}>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 5l7 7-7 7'></path></svg>
                    </li>
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
              <div className={styles.chart}>
                <RouteChart data={routeData?.chartData} ymax={routeData?.elevation} />
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
