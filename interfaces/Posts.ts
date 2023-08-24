export interface Post {
  id: number;
  attributes: {
    title: string;
    likes: number | null;
    publishedAt: string;
    slug: string;
    content: string;
    categories: {
      data: Array<{
        id: number;
        attributes: {
          name: string;
          createdAt: string;
          updatedAt: string;
        };
      }>;
    };
    createdAt: string;
    updatedAt: string;
  };
}

export default interface Posts {
  data: Post[];
}
