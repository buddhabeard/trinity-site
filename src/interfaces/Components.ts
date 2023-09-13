import type { Image } from "./Images";

export interface Component {
  id: string;
  __component?: string;
}

export interface HeroComponent extends Component {
  title: string;
  content: string;
  image: Image;
  url: string;
}

export interface TestimonialComponent extends Component {
  heading: string;
  subHeading: string;
  video: string; // json format, needs JSON.parse
  content: string;
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
