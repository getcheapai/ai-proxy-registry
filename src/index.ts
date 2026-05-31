import { stations } from './stations.js'

export { stations }
export type { Station, StationSystem } from './types.js'

/** Literal union of all station ids, e.g. 'yunwu' | 'packy' */
export type StationId = (typeof stations)[number]['id']
