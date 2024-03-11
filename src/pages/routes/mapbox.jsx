import React, { useEffect, useState } from 'react';
import gcoord from 'gcoord';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './style.module.scss';

export default function MapContainer({ routeData, lineColor }) {
  let map = null;
  const [amap, setAmap] = useState();
  const [mapImpl, setMapImpl] = useState();

  function DrawRouteLine (map, AMap, lineColor) {
    const originLnglats = routeData.geoJson.features[0].geometry.coordinates;
    const centerLnglat = gcoord.transform(
      [originLnglats[Math.floor(originLnglats.length / 2)][0], originLnglats[Math.floor(originLnglats.length / 2)][1]], // 经纬度坐标
      gcoord.WGS84, // 当前坐标系
      gcoord.GCJ02 // 目标坐标系
    );
    map.setCenter(centerLnglat)
    
    let lnglats = [];
    originLnglats.forEach(async el => {
      lnglats.push(gcoord.transform(
        [el[0], el[1]], // 经纬度坐标
        gcoord.WGS84, // 当前坐标系
        gcoord.GCJ02 // 目标坐标系
      ));
    })  

    const polyline = new AMap.Polyline({
      strokeColor: lineColor,
      strokeWeight: 4,
      strokeOpacity: 1,
      cursor: 'pointer',
      path: lnglats
    })
    map.clearMap();
    map.add(polyline);
  }

  useEffect(() => {
    if (ExecutionEnvironment.canUseDOM) {
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
          // DrawRouteLine(map, AMap, lineColor);
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
  
  useEffect(() => {
    if (mapImpl) {
      DrawRouteLine(mapImpl, amap, lineColor);
    }
  }, [mapImpl, routeData]);

  return (
    <div
      id="container"
      className={styles.container}
      style={{ height: "100%", width: "100%" }}
    ></div>
  );
}