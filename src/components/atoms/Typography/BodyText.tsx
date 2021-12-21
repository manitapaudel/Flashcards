import { TypographyProps } from "@/types/TypographyTypes";
import Style from "./typography.module.scss";

const BodyText: React.FC<TypographyProps> = ({ children, className = "" }) => {
  return <p className={`${Style.bodyText}${className}`}>{children}</p>;
};

export default BodyText;
