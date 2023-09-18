import type Categories from "./Categories";
import type { Image } from "./Images";

export interface Post {
  id: number;
  attributes: {
    title: string;
    likes: number | undefined;
    slug: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    categories?: Categories;
    image: Image;
    event?: {
      data: {
        attributes: { title: string };
      };
    };
  };
}

// meta: PostMeta
export interface PostMeta {
  pagination: {
    page: number;
    pageSize: number;
    pageCount: number;
    total: number;
  };
}

export default interface Posts {
  meta: PostMeta;
  data: Post[];
}
