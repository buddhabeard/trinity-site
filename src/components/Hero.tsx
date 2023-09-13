import type { HeroComponent } from "../interfaces/Components";
import HeadingAndText from "./HeadingAndText";

export interface Props extends Omit<HeroComponent, "id"> {}

const Hero = ({ title, content, image }: Props) => {
  return (
    <div className="container mx-auto bg-white flex flex-wrap justify-center mt-32 mb-8 sm:mb-24 items-center">
      <div className="w-full md:w-1/2 md:mr-24 flex items-center max-w-[540px]">
        <HeadingAndText heading={title}>{content}</HeadingAndText>
      </div>
      <div className="flex flex-col items-start justify-start w-2/3 sm:w-2/3 md:w-1/3 lg:w-1/4 max-w-[540px]">
        <img
          src={image.data.attributes.url}
          alt={image.data.attributes.alternativeText || "image"}
        />
      </div>
    </div>
  );
};

export default Hero;
