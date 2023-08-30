import type {
  CallToActionComponent,
  FAQComponent,
  HeroComponent,
  LinkCardComponent,
} from "./Components";

export interface HomePage {
  data: {
    id: number;
    attributes: {
      hero: HeroComponent;
      linkCards: {
        linkCard: LinkCardComponent[];
      };
      faqs: FAQComponent[];
      cta: CallToActionComponent;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}
