import { CardProps } from "@/types/CardTypes";
import styles from "./card.module.scss";

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
  return <div className={`${styles.card} ${className}`}>{children}</div>;
};

export default Card;
