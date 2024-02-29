import toGeoJson from '@mapbox/togeojson'
import { DOMParser } from 'xmldom'
// import path from 'path'
// import fs from 'fs-extra'
// import { readFileSync } from 'fs-extra'
import length from '@turf/length'
import distance from '@turf/distance';
import { point } from '@turf/helpers';

// const ROUTES_PATH = path.join(process.cwd(), 'routers', 'gpx')

// export const routes = ['10612773928'].map(filePath => {
//     const source = new DOMParser().parseFromString(fs.readFileSync('/routers/' + filePath + '.gpx', 'utf8'))
//     const geoJson = toGeoJson.gpx(source)
//     const slug = filePath.replace('.gpx', '')

//     const distance = length(geoJson)

//     return {
//         geoJson, slug, distance
//     }
// })

// p1,p2 数组形式 [经度,纬度]
export const calcPointDistance = (p1, p2) => {
    const v =
        distance(point(p1), point(p2), {
        units: "kilometers",
    }); // 单位千米
    return v;
};

export const fetchRoute = async (filePath) => {
    const res = await (await fetch('/routers/' + filePath)).text();
    const source = new DOMParser().parseFromString(res)
    const geoJson = toGeoJson.gpx(source)
    const slug = filePath.replace('.gpx', '')
    console.log("geoJson", geoJson)
    const distance = length(geoJson)
    // Calculate elevation gain using coordinate data
    const { coordinates } = geoJson.features[0].geometry

    const chartData = [];
    let elevation = 0
    coordinates.forEach((coord, index) => {
        if (index === coordinates.length - 1) return
        if (index === 0) {
            chartData.push({ distance: 0, elevation: coordinates[index][2]})
        } else {
            const tempGeoJson = JSON.parse(JSON.stringify(geoJson));
            tempGeoJson.features[0].geometry.coordinates.splice(index, tempGeoJson.features[0].geometry.coordinates.length - index);
            const d = length(tempGeoJson);
            // const d = calcPointDistance([coordinates[0][0], coordinates[0][1]], [coordinates[index][0], coordinates[index][1]]);
            chartData.push({ distance: d, elevation: coordinates[index][2] })
        }
        const elevationDifference = coordinates[index + 1][2] - coordinates[index][2]
        if (elevationDifference > 0) elevation += elevationDifference
    })
    
    return {
        geoJson, slug, distance, elevation, chartData
    }
};