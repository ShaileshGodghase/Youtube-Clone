export interface VideoType {
  id: {
    kind: string;
    videoId: string;
  };
  kind: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    channelTitle: string;
    thumbnails: {
      default: {
        url: string;
      };
      high: { url: string };
      medium: { url: string };
    };
    title: string;
  };
}
