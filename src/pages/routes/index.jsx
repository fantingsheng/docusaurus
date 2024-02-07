import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
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
            strokeWeight: 3,
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
  useEffect(() => {
    async function getRouteData () {
      const data = await fetchRoute('10612773928.gpx');
      console.log('data', data);
      setRouteData(data);
    }
    getRouteData();
  }, [])
  return (
    <main className={styles.main}>
      <aside className={styles.aside}>
        <nav className={styles.nav}>
          <img src='/img/logo.svg' width='140' alt='spacexcode.com' />
        </nav>
        <header className={styles.header}>
          <h2>我的足迹</h2>
          <p>A curated selection of trails for hiking & running</p>
        </header>
        <section className={styles.routerList}></section>
        <footer className={styles.footer}>
          A project by Timfan
        </footer>
      </aside>
      <div className={styles.rightMap}>
        <MapContainer routeData={routeData} />
      </div>
    </main>
  )
}
