import React, { useEffect, useState } from 'react';
import styles from './style.module.scss';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import { fetchRoute } from '@site/src/utils/route';

function MapContainer({ routeData }) {
  let map = null;
 
  useEffect(() => {
     if (ExecutionEnvironment.canUseDOM && routeData) {
      import("@amap/amap-jsapi-loader").then(AMapLoader => {
      AMapLoader.load({
        key: "f92d916868bf43323d76c1f76702d2a6", // 申请好的Web端开发者Key，首次调用 load 时必填
        version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: [], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
      })
        .then((AMap) => {
          map = new AMap.Map("container", {
            viewMode: "3D", // 是否为3D地图模式
            mapStyle: "amap://styles/macaron",
            zoom: 11, // 初始化地图级别
            center: [120.325121, 31.498017], // 初始化地图中心点位置
          });
          const marker = new AMap.Marker({
            position: new AMap.LngLat(120.325121, 31.498017),
            content: '<div class="custom-content-marker">' +
            '   <img src="/img/poi-marker-red.png" width="30">' +
            '</div>',
            offset: new AMap.Pixel(-50, -15)
          })
          console.log('routeData', routeData)
          const polyline = new AMap.Polyline({
            strokeColor: '#a855f7',
            strokeWeight: 5,
            strokeOpacity: 1,
            path: routeData.geoJson.features[0].geometry.coordinates
          })
          map.add(polyline);
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
