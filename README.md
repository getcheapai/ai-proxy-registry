# ai-proxy-registry

A registry of AI API proxy/relay stations. It catalogs metadata for every known station (name, homepage, underlying system, opening date, …) in a typed, structured way, and is updated continuously as new stations appear.

## Adding a station

This registry is the data source behind **[getcheapai.com](https://www.getcheapai.com)**, a price-comparison site for AI API proxy/relay stations. Anyone can submit a station — whether you run one yourself or you're a user who wants a station you use to be listed.

To add a station:

1. Fork this repository.
2. Add an entry to the `stations` array in [`src/stations.ts`](src/stations.ts), following the existing entries and the `Station` type in [`src/types.ts`](src/types.ts).
3. Run `npm install` then `npm run typecheck` to make sure your entry type-checks.
4. Open a pull request.

A minimal entry looks like this (use `false` for any URL the station doesn't have):

```ts
{
  id: 'your-station',
  name: 'Your Station',
  homepage: 'https://example.com',
  system: 'new-api',
  statusUrl: false,
  privacyUrl: false,
  refundUrl: false,
  updatedAt: '2026-05-31',
},
```

See the `Station` type in [`src/types.ts`](src/types.ts) for every field and which are optional.

> **Note:** This registry is open data. Merging an entry here does not guarantee the station will appear on getcheapai.com — listing on the site is at its own discretion.

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
