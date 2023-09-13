import type { ReactNode } from "react";

export interface Props {
  heading: string;
  children: ReactNode;
}

const HeadingAndText = ({ heading, children }: Props) => {
  return (
    <div className="flex-col justify-start items-start mb-5 md:mb-7 gap-5 flex">
      <div className="self-stretch text-darkBlue text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {heading}
      </div>
      <div className="self-stretch text-dark text-normal md:text-xl font-normal leading-normal">
        {children}
      </div>
    </div>
  );
};

export default HeadingAndText;
