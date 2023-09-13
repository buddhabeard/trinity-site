import { ThemeColor, ThemeColors } from "./interfaces/Enums";

export const getColor = (color: ThemeColor): string => {
  return ThemeColors[color];
};
