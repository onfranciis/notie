import Head from "next/head";
import Image from "next/image";
import { createContext, useEffect, useRef, useState } from "react";
import BgImage from "../components/BgImage";
import NewNote from "../components/NewNote";
import Preview from "../components/Preview";
import { previewKeyShortcuts } from "../components/Shared";
import Top from "../components/Top";
import styles from "../styles/Home.module.css";
import dynamic from "next/dynamic";
import EditNote from "../components/EditNote";
const CardsSection = dynamic(() => import("../components/CardsSection"), {
  ssr: false,
});

export default function Home() {
  const [metaTitle, setMetaTitle] = useState("Notie By Onfranciis");
  const [mode, setMode] = useState("View");
  const [ID, setID] = useState(0);
  const [Index, setIndex] = useState(ID);
  const DoneRef = useRef();
  const SafeRef = useRef();
  const [note, setNote] = useState([]);

  const handlePreview = (value) => {
    setID(value);
    setIndex(value);
    setMode("Preview");
  };

  const handleSave = () => {
    DoneRef.current?.save();
    SafeRef.current?.save();
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{metaTitle}</title>
        <meta name="description" content="Notie by onfranciis" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>

      <main className="tracking-wider flex flex-col justify-center items-center pb-8 ">
        <BgImage />
        <Top
          Mode={mode}
          setMode={(data) => setMode(data)}
          setMetaTitle={(data) => setMetaTitle(data)}
          setSave={() => handleSave()}
        />

        {mode == "View" ? (
          <div className="container p-1 flex flex-row flex-wrap justify-center items-center gap-4">
            {<CardsSection handlePreview={(data) => handlePreview(data)} />}
          </div>
        ) : mode == "Edit" ? (
          <NewNote
            setMetaTitle={(data) => setMetaTitle(data)}
            ref={DoneRef}
            Note={note}
            setNote={(data) => setNote(data)}
          />
        ) : (
          ""
        )}
        {mode == "Preview" ? (
          <Preview
            ID={ID}
            Index={Index}
            setIndex={(data) => setIndex(data)}
            Mode={mode}
            setMode={(data) => setMode(data)}
          />
        ) : (
          ""
        )}
        {mode == "EditNote" ? (
          <EditNote
            ref={SafeRef}
            setMetaTitle={(data) => setMetaTitle(data)}
            Index={Index}
            setIndex={(data) => setIndex(data)}
          />
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
