import { TypographyProps } from "@/types/TypographyTypes";
import Style from "./typography.module.scss";

const H1: React.FC<TypographyProps> = ({ children, className = "" }) => {
  return <h1 className={`${Style.h1}${className}`}>{children}</h1>;
};

export default H1;
