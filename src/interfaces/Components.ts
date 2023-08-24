export interface Component {
  id: string;
  __component?: string;
}

export interface HeroComponent extends Component {
  title: string;
  content: string;
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
