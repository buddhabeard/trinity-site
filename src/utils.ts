import type { Post } from "./interfaces/Posts";
import { ThemeColor, ThemeColors } from "./interfaces/Enums";

export const getColor = (color: ThemeColor): string => {
  return ThemeColors[color];
};

export const getCategoryParam = () => {
  const query = location.search.slice(1);
  const params = query.split("&");
  return decodeURI(params[0].split("=")[1]);
};

export const getPostCategory = (post: Post): string => {
  if (!post.attributes.categories?.data) return "General";
  if (post.attributes.categories.data.length === 0) return "General";

  return post.attributes.categories.data[0].attributes.name;
};

// if eventDate use that first else publishedAt
export const postDate = (post: Post) =>
  post.attributes?.eventDate ?? post.attributes.publishedAt;

export const postsByPostDate = (posts: Post[]) => {
  if (posts && posts.length > 0) {
    return posts.sort((a, b) => {
      const prev = new Date(postDate(a));
      const next = new Date(postDate(b));

      // @ts-ignore
      return next - prev;
    });
  }
  return posts;
};

export const containsHTML = (str: string) => /<[a-z][\s\S]*>/i.test(str);
