import type {
  CallToActionComponent,
  CalloutComponent,
  CarouselComponent,
  FAQComponent,
  LinkCardComponent,
} from "./Components";

export interface HomePage {
  data: {
    id: number;
    attributes: {
      carousel: CarouselComponent;
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
