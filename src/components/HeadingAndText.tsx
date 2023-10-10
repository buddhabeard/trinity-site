import type { ReactNode } from "react";

export interface Props {
  heading: string;
  children: ReactNode;
}

const HeadingAndText = ({ heading, children }: Props) => {
  return (
    <div className="flex-col justify-start items-start lg:p-12 gap-5 flex home-hero">
      <div className="self-stretch text-darkBlue text-4xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {heading}
      </div>
      <div className="self-stretch text-dark text-base lg:text-lg font-normal leading-normal">
        {children}
      </div>
    </div>
  );
};

export default HeadingAndText;
