interface ArticleMediaMetadata {
  url: string
  format: string
  height: number
  width: number
}
interface ArticleMedia {
  type: string
  subtype: string
  caption: string
  copyright: string
  approved_for_syndication: number
  "media-metadata": ArticleMediaMetadata[]
}
export interface Article {
  uri: string
  url: string
  id: number
  asset_id: number
  source: string
  published_date: string
  updated: string
  section: string
  subsection: string
  nytdsection: string
  adx_keywords: string
  byline: string
  type: string
  title: string
  abstract: string
  media: ArticleMedia[]
  eta_id: number
}
