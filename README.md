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
const targetId: StationId = 'yunwu' // ✅
// const wrong: StationId = 'yunw'  // ❌ TS error

const station = stations.find((s) => s.id === targetId)
const cnName = station?.i18nNames?.['zh-CN'] ?? station?.name
```

### Using the JSON file directly

For non-JS consumers, the package ships `dist/stations.json`:

```ts
import data from 'ai-proxy-registry/stations.json' with { type: 'json' }
```

Or via a CDN:

```html
<script type="module">
  const res = await fetch('https://unpkg.com/ai-proxy-registry/dist/stations.json')
  const stations = await res.json()
</script>
```

## Data structure

```ts
interface Station {
  id: string                            // Unique id
  name: string                          // Default display name
  homepage: string                      // Homepage URL
  i18nNames?: Record<string, string>    // Localized names, e.g. { 'zh-CN': '克劳德' }
  system?: 'one-api' | 'new-api' | 'sub2api' | 'custom'
  openedAt?: string                     // Opening date, ISO format 'YYYY-MM-DD'
  updatedAt?: string                    // Last time the data was updated, ISO format 'YYYY-MM-DD'
  supportsInvoice?: boolean             // Whether invoices are supported
  supportsCorporateTransfer?: boolean   // Whether payment via corporate bank transfer is supported
  statusUrl?: string                    // Status page URL
  privacyUrl?: string                   // Privacy policy URL
  refundPolicy?: string                 // Refund policy (free-text description)
}
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
