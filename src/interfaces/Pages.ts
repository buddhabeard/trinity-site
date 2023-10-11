import type {
  AcceptingDonationsComponent,
  CallToActionComponent,
  CalloutComponent,
  CarouselComponent,
  CouponComponent,
  FAQComponent,
  HeroComponent,
  IconListComponent,
  LinkCardComponent,
  StoreHoursComponent,
  StoreLocationComponent,
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

export interface ThriftStorePage {
  data: {
    id: number;
    attributes: {
      hero: HeroComponent;
      acceptingDonations: AcceptingDonationsComponent;
      storeHours: StoreHoursComponent;
      storeLocations: Array<StoreLocationComponent>;
      testimonial: TestimonialComponent;
      coupon: CouponComponent;
      faqs: FAQComponent[];
    };
  };
}

export interface DonatePage {
  data: {
    id: number;
    attributes: {
      hero: HeroComponent;
      content: string;
      faqs: FAQComponent[];
    };
  };
}

export interface ContactPage {
  data: {
    id: number;
    attributes: {
      hero: HeroComponent;
      faqs: FAQComponent[];
    };
  };
}

export interface BlogIndexPage {
  data: {
    id: number;
    attributes: {
      hero: HeroComponent;
      cta: CallToActionComponent;
    };
  };
}
