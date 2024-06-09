/*
    use types to define the shape of the data you're working with
*/

export interface Head {
    id: string
    slug: string
    body: string;
    collection: string
    data: {
        title: string;
        tags: string[];
        updateDate: string;
        pubDate: string;
        description: string;
        image: {
            url: string;
            alt: string;
        };
        draft: boolean;
    }
}