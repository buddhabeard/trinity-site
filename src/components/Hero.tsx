import type { HeroComponent } from "../interfaces/Components";
import HeadingAndText from "./HeadingAndText";

export interface Props extends Omit<HeroComponent, "id"> {}

const Hero = ({ title, content, image }: Props) => {
  return (
    <div className="container bg-white flex flex-wrap justify-center mt-32 mb-8 sm:mb-24 items-center">
      <div className="w-full md:w-1/2 flex mb-8 md:mb-0 justify-center items-center">
        <HeadingAndText heading={title}>{content}</HeadingAndText>
      </div>
      <div className="flex w-full md:w-1/3 justify-center items-center">
        <img
          className="object-fit"
          src={image.data.attributes.url}
          alt={image.data.attributes.alternativeText || "image"}
        />
      </div>
    </div>
  );
};

export default Hero;
