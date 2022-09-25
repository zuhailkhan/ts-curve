export interface Post {
    _id : string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        title: string;
        image: Object;
    };
    subtitle: string;
    description: string;
    slug: {
        current: string;
    },
    categories: Array[],
    mainImage: {
        asset: {
            url: string;
        }
    },
    publishedAt: string,
    body: [object]
}

export interface SinglePost extends Post {
    _id: string;
    publishedAt: string;
    title: string;
    mainImage: Object;
}