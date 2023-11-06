import type { Categories } from "./Categories";
import type { HeroComponent } from "./Components";
import type { Image } from "./Images";

export interface Post {
  id: number;
  attributes: {
    hero: HeroComponent;
    title: string;
    likes: number | undefined;
    slug: string;
    content: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    categories?: { data: Categories };
    image: Image;
    eventDate: null | string;
    feature: boolean;
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
