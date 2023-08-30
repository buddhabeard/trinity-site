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
      linkCards: LinkCardComponent[];
      faqs: FAQComponent[];
      cta: CallToActionComponent;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}
