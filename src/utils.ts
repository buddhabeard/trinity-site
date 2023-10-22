import { ThemeColor, ThemeColors } from "./interfaces/Enums";

export const getColor = (color: ThemeColor): string => {
  return ThemeColors[color];
};

export const getCategoryParam = () => {
  const query = location.search.slice(1);
  const params = query.split("&");
  return decodeURI(params[0].split("=")[1]);
};
