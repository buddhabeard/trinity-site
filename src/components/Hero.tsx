import type { HeroComponent } from "../interfaces/Components";
import HeadingAndText from "./HeadingAndText";

export interface Props extends Omit<HeroComponent, "id"> {}

const Hero = ({ title, content, image }: Props) => {
  return (
    <div className="mx-auto h-[464px] px-4 bg-white flex flex-wrap justify-center mt-24 mb-8">
      <div className="w-full h-full md:w-1/2 md:mr-auto flex max-w-[540px] lg:mt-24 justify-center">
        <HeadingAndText heading={title}>{content}</HeadingAndText>
      </div>
      {image && (
        <div className="flex h-full items-center justify-center w-2/3 sm:w-2/3 md:w-1/3 lg:w-1/2 max-w-[587px]">
          <img
            src={image.data.attributes.url}
            alt={image.data.attributes.alternativeText || "image"}
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
