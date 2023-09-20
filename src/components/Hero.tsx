import type { HeroComponent } from "../interfaces/Components";
import HeadingAndText from "./HeadingAndText";

export interface Props extends Omit<HeroComponent, "id"> {}

const Hero = ({ title, content, image }: Props) => {
  return (
    <div className="container mx-auto max-h-[480px] bg-white flex flex-wrap justify-center mt-24 mb-8 items-center">
      <div className="w-full h-full md:w-1/2 md:mr-24 flex items-center max-w-[540px]">
        <HeadingAndText heading={title}>{content}</HeadingAndText>
      </div>
      <div className="flex h-full flex-col items-start justify-start w-2/3 sm:w-2/3 md:w-1/3 lg:w-1/2 max-w-[240px]">
        <img
          src={image.data.attributes.url}
          alt={image.data.attributes.alternativeText || "image"}
        />
      </div>
    </div>
  );
};

export default Hero;
