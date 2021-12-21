import { TypographyProps } from "@/types/TypographyTypes";
import Style from "./typography.module.scss";

const SmallText: React.FC<TypographyProps> = ({ children, className = "" }) => {
  return <p className={`${Style.smallText}${className}`}>{children}</p>;
};

export default SmallText;
