export interface YoutubeData {
  kind: string;
  etag: string;
  items: {
    kind: string;
    etag: string;
    id: string;
    snippet: Snippet;
  }[];
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
}

interface Snippet {
  publishedAt: string;
  channelId: string;
  title: string;
  description: string;
  thumbnails: {
    default: Thumnaiil;
    medium: Thumnaiil;
    high: Thumnaiil;
    standard: Thumnaiil;
    maxres: Thumnaiil;
  };
  channelTitle: string;
  categoryId: string;
  liveBroadcastContent: string;
  defaultLanguage: string;
  localized: {
    title: string;
    description: string;
  };
}

interface Thumnaiil {
  url: string;
  width: number;
  height: number;
}
