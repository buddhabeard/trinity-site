import type {
  CallToActionComponent,
  CalloutComponent,
  CarouselComponent,
  FAQComponent,
  HeroComponent,
  LinkCardComponent,
  TestimonialComponent,
} from "./Components";
import type { Image } from "./Images";

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
      whatWeProvide: {
        heading: string;
        content: string;
        iconList: Array<{ icon: Image; heading: string; content: string }>;
      };
      callout: CalloutComponent;
      faqs: FAQComponent[];
      cta: CallToActionComponent;
      createdAt: string;
      updatedAt: string;
      publishedAt: string;
    };
  };
}
