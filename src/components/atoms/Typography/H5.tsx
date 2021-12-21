import { TypographyProps } from "@/types/TypographyTypes";
import Style from "./typography.module.scss";

const H5: React.FC<TypographyProps> = ({ children, className = "" }) => {
  return <h5 className={`${Style.h5}${className}`}>{children}</h5>;
};

export default H5;
