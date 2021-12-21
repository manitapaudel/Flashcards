import React from "react";
import Card from "@/components/atoms/Card";
import { H1, H2 } from "@/components/atoms/Typography";

import Style from "./flashcards.module.scss";

const Index = () => {
  const [openCard, setOpenCard] = React.useState(false);
  return (
    <div className={Style.container}>
      <H1>Flashcards</H1>
      <Card className={Style.card}>
        <H2>{openCard ? "I am the Answer" : "I am a Question"}</H2>
      </Card>
      <div className={Style.buttonsSection}>
        <button>Previous</button>
        <button
          onClick={() => {
            setOpenCard(!openCard);
          }}
          // className={Style.button}
        >
          {openCard ? "Go Back" : "Show Answer"}
        </button>
        <button>Next</button>
      </div>
    </div>
  );
};

export default Index;
