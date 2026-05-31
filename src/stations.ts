import type { Station } from './types.js'

export const stations = [
  {
    id: 'yunwu',
    name: 'yunwu',
    homepage: 'https://example.com',
    i18nNames: { 'zh-CN': '云雾' },
    system: 'new-api',
    openedAt: '2024-03-15',
    updatedAt: '2026-05-31',
  },
] as const satisfies readonly Station[]
