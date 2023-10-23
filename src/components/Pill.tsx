import type { ReactNode } from "react";
import type { ThemeColor } from "../interfaces/Enums";

export type PillProps = {
  bg: ThemeColor;
  color: ThemeColor;
  children: ReactNode;
  onClick: () => void;
  classes?: string;
};

const Pill = ({
  bg = "teal",
  color = "white",
  children,
  onClick,
  classes = "",
}: PillProps) => (
  <button
    onClick={onClick}
    className={`inline-flex items-center rounded-full px-3 py-0.5 text-sm font-medium bg-${bg} text-${color} ${classes}`}
  >
    {children}
  </button>
);

export default Pill;
