// const test = ["hero", "linkCards|>linkCard", "faqs", "callout|>image", "cta"];

export const createQuery = (queries: string[]) =>
  queries
    .map((t) => {
      if (!t.includes("|>")) return `populate[${t}][populate]=*`;
      return (
        "populate" +
        t
          .split("|>")
          .map((tn) => `[${tn}]`)
          .join("[populate]") +
        "[populate]=*"
      );
    })
    .join("&");

export const homepageQuery = createQuery([
  "carousel|>items|>image",
  "linkCards|>linkCard",
  "faqs",
  "callout|>image",
  "cta",
]);

export const postsQuery = createQuery([
  "hero|>image",
  "title",
  "likes",
  "slug",
  "image",
  "event",
  "categories",
  "content",
  "createdAt",
  "updatedAt",
  "publishedAt",
]);

export const whoWeAreQuery = createQuery([
  "hero|>image",
  "whatWeProvide|>iconList|>icon",
  "carousel|>items|>image",
  "testimonial|>image",
  "callout|>image",
  "faqs",
  "cta",
]);

export const thriftStoreQuery = createQuery([
  "hero|>image",
  "acceptingDonations|>itemsAvailable",
  "storeHours",
  "storeLocations",
  "testimonial|>image",
  "faqs",
  "coupon|>image",
]);

export const blogIndexPageQuery = createQuery(["hero|>image", "cta"]);

export type Queries =
  | typeof homepageQuery
  | typeof postsQuery
  | typeof whoWeAreQuery;

export const queryWithLimit = (query: Queries, limit: number): string =>
  `${query}&pagination[pageSize]=${limit}`;
