import type { ReactNode } from "react";

export interface Props {
  heading: string;
  children: ReactNode;
}

const HeadingAndText = ({ heading, children }: Props) => {
  return (
    <div className="w-96 h-72 flex-col justify-start items-start gap-5 flex">
      <div className="self-stretch text-darkBlue text-5xl font-bold leading-10">
        {heading}
      </div>
      <div className="self-stretch text-dark text-xl font-normal leading-7">
        {children}
      </div>
    </div>
  );
};

export default HeadingAndText;
