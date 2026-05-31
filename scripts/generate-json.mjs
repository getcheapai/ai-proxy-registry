import { writeFileSync } from 'node:fs'
import { stations } from '../dist/index.js'

writeFileSync(
  new URL('../dist/stations.json', import.meta.url),
  JSON.stringify(stations, null, 2),
)

console.log(`Generated dist/stations.json with ${stations.length} stations`)
