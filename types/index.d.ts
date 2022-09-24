export interface Post {
    _id : string;
    _createdAt: string;
    title: string;
    author: {
        name: string;
        title: string;
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
    body: [object]
}