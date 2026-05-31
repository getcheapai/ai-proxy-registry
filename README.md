# ai-proxy-registry

A registry of AI API proxy/relay stations. It catalogs metadata for every known station (name, homepage, underlying system, opening date, …) in a typed, structured way, and is updated continuously as new stations appear.

## Install

```bash
npm i ai-proxy-registry
```

## Usage

### TypeScript / JavaScript

```ts
import { stations, type Station, type StationId } from 'ai-proxy-registry'

// Type-safe id: a typo is caught at compile time
const targetId: StationId = 'claude' // ✅
// const wrong: StationId = 'clau'  // ❌ TS error

const station = stations.find((s) => s.id === targetId)
const cnName = station?.i18nNames?.['zh-CN'] ?? station?.name
```

### Using the JSON file directly

For non-JS consumers, the package ships `dist/stations.json`:

```ts
import data from 'ai-proxy-registry/stations.json' with { type: 'json' }
```

## Development

```bash
npm install
npm run build       # Build ESM/CJS/d.ts and stations.json
npm run typecheck   # Type check
```

`prepublishOnly` rebuilds automatically before publishing.

## License

MIT
