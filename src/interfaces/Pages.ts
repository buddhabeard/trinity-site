import type {
  CallToActionComponent,
  CalloutComponent,
  CarouselComponent,
  FAQComponent,
  HeroComponent,
  IconListComponent,
  LinkCardComponent,
  TestimonialComponent,
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

export interface WhoWeArePage {
  data: {
    id: number;
    attributes: {
      hero: HeroComponent;
      carousel: CarouselComponent;
      testimonial: TestimonialComponent;
      whatWeProvide: IconListComponent;
      callout: CalloutComponent;
      faqs: FAQComponent[];
      cta: CallToActionComponent;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}
