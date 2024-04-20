import React, { useEffect, useState } from 'react';
import gcoord from 'gcoord';
import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';
import styles from './style.module.scss';
import { Skeleton } from '@mui/material';
import { useMapContext } from '../../utils/mapprovider';

export default function MapContainer({ routeData, lineColor }) {
  let map = null;
  const [amap, setAmap] = useState();
  const [mapImpl, setMapImpl] = useState();
  const [loading, setLoading] = useState(true);
  const [hoverPointerMarker, setHoverPointerMarker] = useState();

  const { hoverCoordinate } = useMapContext();

  function DrawRouteLine (map, AMap, lineColor) {
    const originLnglats = routeData.geoJson.features[0].geometry.coordinates;
    const centerLnglat = gcoord.transform(
      [originLnglats[Math.floor(originLnglats.length / 2)][0], originLnglats[Math.floor(originLnglats.length / 2)][1]], // 经纬度坐标
      gcoord.WGS84, // 当前坐标系
      gcoord.GCJ02 // 目标坐标系
    );

    const startLnglat = gcoord.transform([originLnglats[0][0], originLnglats[0][1]], gcoord.WGS84, gcoord.GCJ02);
    const endLnglat = gcoord.transform([originLnglats[originLnglats.length - 1][0], originLnglats[originLnglats.length - 1][1]], gcoord.WGS84, gcoord.GCJ02);

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
      lineCap: 'square',
      path: lnglats,
      extData: {
        id: routeData.slug
      }
    })

    const startIcon = new AMap.Icon({
      // 图标尺寸
      size: new AMap.Size(25, 34),
      // 图标的取图地址
      image: '/img/dir-marker.png',
      // 图标所用图片大小
      imageSize: new AMap.Size(135, 40),
      // 图标取图偏移量
      imageOffset: new AMap.Pixel(-9, -3)
    });
    const endIcon = new AMap.Icon({
      size: new AMap.Size(25, 34),
      image: '/img/dir-marker.png',
      imageSize: new AMap.Size(135, 40),
      imageOffset: new AMap.Pixel(-95, -3)
    });
    const startMarker = new AMap.Marker({
      position: new AMap.LngLat(startLnglat[0], startLnglat[1]),
      icon: startIcon,
      offset: new AMap.Pixel(-13, -30)
    });
    const endMarker = new AMap.Marker({
      position: new AMap.LngLat(endLnglat[0], endLnglat[1]),
      icon: endIcon,
      offset: new AMap.Pixel(-13, -30)
    });

    const hoverPointMarker = new AMap.Marker({
      position: hoverCoordinate ? new AMap.LngLat(hoverCoordinate[0], hoverCoordinate[1]) : null,
      content: `<div style="width: 12px;height:12px;padding: 3px;border-radius: 50%;background-color: ${lineColor}"><div style="width: 6px;height:6px;background-color:#fff;border-radius:50%;"></div></div>`,
      offset: new AMap.Pixel(-6, -6)
    });
    setHoverPointerMarker(hoverPointMarker);
    
    map.clearMap();
    map.add(polyline);
    map.add(startMarker);
    map.add(endMarker);
    map.add(hoverPointMarker);
    map.setZoom(14);
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
          setTimeout(() => {
            map = new AMap.Map("container", {
              viewMode: "3D", // 是否为3D地图模式
              zoom: 14, // 初始化地图级别
              center: [120.325121, 31.498017], // 初始化地图中心点位置
              mapStyle: 'amap://styles/macaron'
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
          })
          
        })
        .catch((e) => {
          console.log(e);
        }).finally(() => {
          setLoading(false)
        });
      })
    }
    return () => {
      map?.destroy();
    };
  }, []);
  
  useEffect(() => {
    if (mapImpl && routeData) {
      DrawRouteLine(mapImpl, amap, lineColor);
    }
  }, [mapImpl, routeData]);

  useEffect(() => {
    if (hoverPointerMarker) {
      if (hoverCoordinate) {
        hoverPointerMarker.show()
        const poi = gcoord.transform([hoverCoordinate[0], hoverCoordinate[1]], gcoord.WGS84, gcoord.GCJ02);
        hoverPointerMarker.setPosition(new AMap.LngLat(poi[0], poi[1]));
      } else {
        hoverPointerMarker.setPosition(null)
      }
    }
    return () => hoverPointerMarker && hoverPointerMarker.hide()
  }, [hoverPointerMarker, hoverCoordinate])

  return (
    loading ? 
      (<Skeleton animation="wave" variant="rectangular" sx={{ bgcolor: 'grey.300' }} width='100%' height='100%' />) :
      (<div
        id="container"
        className={styles.container}
        style={{ height: "100%", width: "100%" }}
      />)
  );
}