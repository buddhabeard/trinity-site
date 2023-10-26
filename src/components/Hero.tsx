import type { HeroComponent } from "../interfaces/Components";
import HeadingAndText from "./HeadingAndText";

export interface Props extends Omit<HeroComponent, "id"> {
  withHeading?: boolean;
}

const Hero = ({ title, content, image, withHeading = true }: Props) => {
  return (
    <div className="mx-auto flex flex-wrap justify-center items-center mt-24 mb-12 overflow-hidden">
      {withHeading && (
        <div className="w-full h-1/2 bg-white md:h-auto md:w-1/2 md:mr-auto flex lg:max-w-[540px] lg:my-auto justify-start">
          <HeadingAndText heading={title}>{content}</HeadingAndText>
        </div>
      )}
      {image && (
        <div className="flex items-center justify-center md:p-8 md:w-1/2 max-w-[587px]">
          <img
            className="h-full w-full object-fit"
            src={image.data.attributes.url}
            alt={image.data.attributes.alternativeText || "image"}
          />
        </div>
      )}
    </div>
  );
};

export default Hero;
