import type Categories from "./Categories";

export interface Post {
  id: number;
  attributes: {
    title: string;
    likes: number | null;
    publishedAt: string;
    slug: string;
    content: string;
    categories: {
      data: Categories;
    };
    createdAt: string;
    updatedAt: string;
  };
}

export default interface Posts {
  data: Post[];
}
