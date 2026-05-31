export type StationSystem = 'one-api' | 'new-api' | 'sub2api' | 'custom'

export interface Station {
  /** Unique id */
  id: string
  /** Default display name */
  name: string
  /** Homepage URL */
  homepage: string
  /** Localized names. Key is a language tag (e.g. 'zh-CN'), value is the name in that language. */
  i18nNames?: Record<string, string>
  /** Underlying system this station is based on */
  system?: StationSystem
  /** Opening date, ISO format 'YYYY-MM-DD' */
  openedAt?: string
  /** Whether invoices are supported */
  supportsInvoice?: boolean
  /** Whether payment via corporate bank transfer is supported */
  supportsCorporateTransfer?: boolean
  /** Status page URL */
  statusUrl?: string
  /** Privacy policy URL */
  privacyUrl?: string
  /** Refund policy (free-text description) */
  refundPolicy?: string
  /** Last time the data was updated, ISO format 'YYYY-MM-DD' */
  updatedAt?: string
}
