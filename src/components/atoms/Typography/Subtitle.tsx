import { TypographyProps } from "@/types/TypographyTypes";
import Style from "./typography.module.scss";

const Subtitle: React.FC<TypographyProps> = ({ children, className = "" }) => {
  return <p className={`${Style.subtitle}${className}`}>{children}</p>;
};

export default Subtitle;
