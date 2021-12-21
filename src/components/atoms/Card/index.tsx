import { CardProps } from "@/types/CardTypes";
import Style from "./card.module.scss";

const Card: React.FC<CardProps> = ({ children, className = "", openCard }) => {
  return (
    <div
      className={`${Style.card} ${
        !openCard ? Style.questionCard : ""
      } ${className}`}
    >
      <div className={Style.innerCard}>{children}</div>
    </div>
  );
};

export default Card;
