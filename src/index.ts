import { stations } from './stations.js'

export { stations }
export type { Station, StationSystem } from './types.js'

/** Literal union of all station ids, e.g. 'claude' | 'openai' */
export type StationId = (typeof stations)[number]['id']
