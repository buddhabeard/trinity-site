import type {
  CallToActionComponent,
  CalloutComponent,
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
      callout: CalloutComponent;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}
