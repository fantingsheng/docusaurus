import toGeoJson from '@mapbox/togeojson'
import { DOMParser } from 'xmldom'
// import path from 'path'
// import fs from 'fs-extra'
// import { readFileSync } from 'fs-extra'
import length from '@turf/length'

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

export const fetchRoute = async (filePath) => {
    const res = await (await fetch('/routers/' + filePath)).text();
    const source = new DOMParser().parseFromString(res)
    const geoJson = toGeoJson.gpx(source)
    const slug = filePath.replace('.gpx', '')

    const distance = length(geoJson)
    // Calculate elevation gain using coordinate data
    const { coordinates } = geoJson.features[0].geometry
    let elevation = 0
    coordinates.forEach((coord, index) => {
        if (index === coordinates.length - 1) return
        const elevationDifference = coordinates[index + 1][2] - coordinates[index][2]
        if (elevationDifference > 0) elevation += elevationDifference
    })

    return {
        geoJson, slug, distance, elevation
    }
};