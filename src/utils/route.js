import toGeoJson from '@mapbox/togeojson'
import { DOMParser } from 'xmldom'
import length from '@turf/length'
import distance from '@turf/distance';
import { point, lineString } from '@turf/helpers';

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
    console.log(new Date().getSeconds())
    const source = new DOMParser().parseFromString(res)
    const geoJson = toGeoJson.gpx(source)
    const slug = filePath.replace('.gpx', '')
    console.log("geoJson", geoJson)
    const distance = length(geoJson)
    // Calculate elevation gain using coordinate data
    const { coordinates } = geoJson.features[0].geometry

    const chartData = [];

    let totalDistance = 0
    let elevation = 0
    console.log("coordinates", coordinates.length)

    // coordinates.forEach((coord, index) => {
    //     if (index === coordinates.length - 1) return
    //     if (index === 0) {
    //         chartData.push({ distance: 0, elevation: coordinates[index][2]})
    //     } else {
    //         const tempGeoJson = JSON.parse(JSON.stringify(geoJson));
    //         tempGeoJson.features[0].geometry.coordinates.splice(index, tempGeoJson.features[0].geometry.coordinates.length - index);
    //         const d = length(tempGeoJson);
    //         // const d = calcPointDistance([coordinates[0][0], coordinates[0][1]], [coordinates[index][0], coordinates[index][1]]);
    //         chartData.push({ distance: d, elevation: coordinates[index][2] })
    //     }
    //     const elevationDifference = coordinates[index + 1][2] - coordinates[index][2]
    //     if (elevationDifference > 0) elevation += elevationDifference
    // })

    coordinates.forEach((currentCoordinate, i) => {
      /* Get each coordinate pair */
      const nextCoordinate = coordinates[i + 1]
  
      if (!nextCoordinate) {
        // Last coordinate, nothing more to do
        return
      }
  
      /* Convert coordinate pair to a lineString and measure with @turf/length */
      const line = lineString([
        [currentCoordinate[0], currentCoordinate[1]],
        [nextCoordinate[0], nextCoordinate[1]],
      ])
      const newDistance = length(line)
  
      /* Add distance to total */
      totalDistance += newDistance
  
      /* First coordinate starts at 0km */
      if (i === 0) {
        currentCoordinate.push(0)
      }
      /* Add the new total distance to each coordinate */
      nextCoordinate.push(totalDistance)
  
      /* Calculate elevation gain */
      const elevationDifference = nextCoordinate[2] - currentCoordinate[2]
      if (elevationDifference > 0) elevation += elevationDifference
    })

    return {
        geoJson, slug, distance, elevation, coordinates
    }
};