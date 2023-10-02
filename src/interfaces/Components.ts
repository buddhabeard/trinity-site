import type { Image } from "./Images";

export interface Component {
  id: string;
  __component?: string;
}

export interface HeroComponent extends Component {
  title: string;
  content: string;
  image?: Image;
  url: string;
}

export interface TestimonialComponent extends Component {
  quote: string;
  name: string;
  profession: string;
  video: string; // json format, needs JSON.parse
}

export interface FAQComponent extends Component {
  question: string;
  answer: string;
}

export interface CallToActionComponent extends Component {
  type: "donation" | "application";
  heading: string;
  content: string;
}

export interface LinkCardComponent extends Component {
  image: Image;
  heading: string;
  content: string;
  url: string;
}

export interface LinkCardsComponent extends Component {
  linkCard: LinkCardComponent[];
}

export interface CalloutComponent extends Component {
  image: Image;
  title: string;
  content: string;
  url: string;
  bgColor: "teal" | "dark blue" | "green" | "lime green";
  buttonText: string;
}

export interface CarouselComponent {
  items: HeroComponent[];
}

export type IconListComponent = {
  iconList: {
    heading: string;
    content: string;
    icon: Image;
  }[];
  heading: string;
  content: string;
};

export interface AcceptingDonationsComponent {
  heading: string;
  content: string;
  buttonText: string;
  buttonColor: "teal" | "dark blue" | "green" | "lime green";
  itemsAvailable: Array<{
    icon: Image;
    content: string;
  }>;
}

export interface StoreHoursComponent {
  hoursOpen: Array<{
    open: Date;
    close: Date;
    day:
      | "Monday"
      | "Tuesday"
      | "Wednesday"
      | "Thursday"
      | "Friday"
      | "Saturday"
      | "Sunday";
  }>;
}

export interface CouponComponent {
  name: string;
  image: Image;
  downloadURL: string;
}

export interface StoreLocationComponent {
  title: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  directionsURL: string;
}
