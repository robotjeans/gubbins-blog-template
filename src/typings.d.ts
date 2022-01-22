export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: Author;
  description: string;
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

export interface Author {
  name: string;
  image: string;
}
