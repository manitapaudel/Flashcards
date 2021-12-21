import { TypographyProps } from "@/types/TypographyTypes";
import Style from "./typography.module.scss";

const H3: React.FC<TypographyProps> = ({ children, className = "" }) => {
  return <h3 className={`${Style.h3}${className}`}>{children}</h3>;
};

export default H3;
