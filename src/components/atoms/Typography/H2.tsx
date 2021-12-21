import { TypographyProps } from "@/types/TypographyTypes";
import Style from "./typography.module.scss";

const H2: React.FC<TypographyProps> = ({ children, className = "" }) => {
  return <h2 className={`${Style.h2}${className}`}>{children}</h2>;
};

export default H2;
