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
