import { TypographyProps } from "@/types/TypographyTypes";
import Style from "./typography.module.scss";

const H4: React.FC<TypographyProps> = ({ children, className = "" }) => {
  return <h4 className={`${Style.h4}${className}`}>{children}</h4>;
};

export default H4;
