/*
    use types to define the shape of the data you're working with
*/

export interface Head {
  title: string;
  image: {
      url: string;
      alt: string;
  };
  tags: string[];
  updateDate: string;
  pubDate: string;
  description: string;
  draft: boolean;
}
