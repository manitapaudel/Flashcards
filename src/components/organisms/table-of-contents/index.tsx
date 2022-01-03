import React from "react";
import Style from "./table-of-contents.module.scss";

type TOCProps = {
  children: React.ReactNode;
  Table: React.FC<TableProps>;
  Content: React.FC<ContentProps>;
};
type TableProps = {
  className?: string;
};
type ContentProps = {
  className?: string;
};
// interface TOCComposition {

// }

const materials = [
  {
    title: "A",
    id: "A",
    content: (
      <>
        <li>
          <strong>Accessory</strong>
          <p>
            The double C in accessory is part of what makes this word tricky.
            People are often tempted to replace the C with a single S sound.
            However, each of these C letters represents a different sound (a
            “hard C” and a “soft C”). With that in mind, accessory is pronounced
            [ ak-ses–uh-ree ].
          </p>
        </li>
        <li>
          <strong>Anemone</strong>
          <p>
            This word is so hard to pronounce that it was even featured as a
            joke in the popular Pixar film Finding Nemo. There are two elements
            that make the word anemone tricky—the preponderance of M and N
            sounds and the [ uh-nee ] ending that looks like it should be
            pronounced like the number one. That said, this word does have a
            particular rhythm to it that can help you pronounce it correctly: [
            uh–nem–uh-nee ].
          </p>
        </li>
      </>
    ),
  },
  {
    title: "B",
    id: "b",
    content: <></>,
  },
  {
    title: "C",
    id: "c",
    content: (
      <>
        <li>
          <strong>Choir</strong>
          <p>
            It&apos;s tempting to pronounce the CH in choir with a [ ch ] sound,
            but that would be incorrect. The word choir is actually pronounced [
            kwahyuhr ]. An antique and sadly obsolete spelling of this word is
            quire, which is a clearer representation of how it is pronounced.
          </p>
        </li>
        <li>
          <strong>Colonel</strong>
          <p>
            The word colonel came to English through French, where it was
            spelled coronel. For historical reasons, which you can read about at
            our entry for the word, the R was eventually replaced with an L.
            Keeping this in mind, colonel is still pronounced [ kur-nl ].
          </p>
        </li>
        <li>
          <strong>Coup</strong>
          <p>
            Another word that has been adopted into English from French,
            complicating pronunciation, is coup. In French, the letters -oup at
            the end of a word is pronounced [ oo ]. We didn&apos;t just adopt
            this French word into English, we adopted the French pronunciation,
            too. That means coup is correctly pronounced [ koo ].
          </p>
        </li>
      </>
    ),
  },
  {
    title: "",
    id: "",
    content: "",
  },
  {
    title: "",
    id: "",
    content: "",
  },
  {
    title: "",
    id: "",
    content: "",
  },
  {
    title: "",
    id: "",
    content: "",
  },
  {
    title: "",
    id: "",
    content: "",
  },
  {
    title: "",
    id: "",
    content: "",
  },
  {
    title: "",
    id: "",
    content: "",
  },
];

const TOC: React.FC<TOCProps> = ({ children }) => {
  return <div className={Style.container}>{children}</div>;
};

const Table: React.FC<TableProps> = () => {
  return (
    <>
      <h1>Table Of Contents</h1>
      <div>
        {materials.map(({ title, id }) => (
          <div key={id} className={Style.table}>
            <a href={`#${id}`}>{title}</a>
          </div>
        ))}
      </div>
    </>
  );
};

const Content: React.FC<ContentProps> = () => {
  return (
    <div>
      {materials.map(({ id, title, content }) => (
        <div key={id}>
          <h2 id={id}>{title}</h2>
          <ul>{content}</ul>
        </div>
      ))}
    </div>
  );
};

TOC.Table = Table;
TOC.Content = Content;
export default TOC;
