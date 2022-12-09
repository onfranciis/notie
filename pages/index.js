import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import BgImage from "../components/BgImage";
import Card from "../components/Card";
import FakeNotes from "../components/FakeNotes";
import NewNote from "../components/NewNote";
import Preview from "../components/Preview";
import Top from "../components/Top";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [metaTitle, setMetaTitle] = useState("Notie By Onfranciis");
  const [mode, setMode] = useState("Preview");
  const [count, setCount] = useState(0);
  const preview = FakeNotes[count];
  const DoneRef = useRef();

  const handlePreview = (value) => {
    setCount(value);
    setMode("Preview");
  };

  const handleSave = () => {
    DoneRef.current?.save();
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
            {FakeNotes.map((item) => (
              <Card
                Key={item.Id}
                Color={item.Color}
                Title={item.Title}
                Body={item.Body}
                Date={item.Date}
                ID={item.Id}
                preview={(data) => handlePreview(data)}
              />
            ))}
          </div>
        ) : mode == "Edit" ? (
          <NewNote setMetaTitle={(data) => setMetaTitle(data)} ref={DoneRef} />
        ) : (
          ""
        )}
        {mode == "Preview" ? (
          <Preview
            ID={count}
            Color={preview.Color}
            Title={preview.Title}
            Body={preview.Body}
            Date={preview.Date}
            Next={() => setCount(count + 1)}
            Prev={() => setCount(count - 1)}
          />
        ) : (
          ""
        )}
      </main>
    </div>
  );
}
