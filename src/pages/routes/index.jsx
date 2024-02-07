import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import Link from '@docusaurus/Link';
import { fetchRoute } from '@site/src/utils/route';
import gcoord from 'gcoord';

function MapContainer({ routeData }) {
  let map = null;
  
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
          const originLnglats = routeData.geoJson.features[0].geometry.coordinates;
          const centerLnglat = gcoord.transform(
            [originLnglats[Math.floor(originLnglats.length / 2)][0], originLnglats[Math.floor(originLnglats.length / 2)][1]], // 经纬度坐标
            gcoord.WGS84, // 当前坐标系
            gcoord.GCJ02 // 目标坐标系
          );
          map = new AMap.Map("container", {
            viewMode: "3D", // 是否为3D地图模式
            mapStyle: "amap://styles/macaron",
            zoom: 13, // 初始化地图级别
            center: centerLnglat, // 初始化地图中心点位置
          });
          
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
            strokeColor: '#a855f7',
            strokeWeight: 4,
            strokeOpacity: 1,
            path: lnglats
          })
          map.add(polyline);
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

  return (
    <div
      id="container"
      className={styles.container}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}

export default function () {
  const [routeData, setRouteData] = useState();
  const [curRoute, setCurRoute] = useState("10612773928.gpx")
  const routes = [
    { name: '上班路线', type: '🛵', distance: 9.75, elevation: 785, color: '#a855f7', slug: '10612773928.gpx' },
    // { name: '金匮公园', type: '🚴‍♀️', distance: 5.45, elevation: 23, color: '#f59e0b', slug: '10612773926.gpx' },
    // { name: '尚贤河', type: '🏃', distance: 15.5, elevation: 115, color: '#ef4444', slug: '10612773938.gpx' }
  ]
  async function getRouteData (route) {
    const data = await fetchRoute(route);
    console.log('data', data);
    setRouteData(data);
  };

  useEffect(() => {
    getRouteData(curRoute);
  }, [])

  const handleClickRoute = (route) => {
    setCurRoute(route);
    getRouteData(route);
  };

  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <div style={{ paddingTop: '0.75rem' }}>
          <nav className={styles.nav}>
            <Link to="/"><img src='/img/logo.svg' width='140' alt='spacexcode.com' /></Link>
          </nav>
          <header className={styles.header}>
            <h2>我的足迹</h2>
            <p>记录下自己在这个城市的一些足迹。👣</p>
          </header>
          <section className={styles.routerList}>
            <div className={styles.filterNav}>
              <h3>所有路线</h3>
            </div>
            <ul>
              {routes.map(el => (
                <li style={{ borderColor: curRoute === el.slug ? el.color : '#e0e4e0' }} onClick={handleClickRoute(el.slug)}>
                  <div className={styles.rhead}>
                    <p><span className={styles.dot} style={{ backgroundColor: el.color }}></span>{el.name}</p>
                    <span className={styles.mode}>{el.type}</span>
                  </div>
                  <ol>
                    <li>
                      <span>Distance</span>
                      <strong>{el.distance} km</strong>
                    </li>
                    <li>
                      <span>Elevation</span>
                      <strong>{el.elevation} m</strong>
                    </li>
                  </ol>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={styles.moreBtn}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                </li>
              ))}
            </ul>
          </section>
          <footer className={styles.footer}>
            A project by <Link to="/author">Timfan</Link>
          </footer>
        </div>
      </aside>
      <div className={styles.rightMap}>
        <MapContainer routeData={routeData} />
      </div>
    </main>
  )
}
