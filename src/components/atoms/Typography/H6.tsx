import { TypographyProps } from "@/types/TypographyTypes";
import Style from "./typography.module.scss";

const H6: React.FC<TypographyProps> = ({ children, className = "" }) => {
  return <h6 className={`${Style.h6}${className}`}>{children}</h6>;
};

export default H6;
