export type Source = {
  id: string;
  name: string;
};

export type article = {
  source: Source;
  author: any;
  title: string;
  description: string;
  content: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
};
