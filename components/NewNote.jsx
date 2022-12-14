import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { bgColorPicker, accentColorPicker, borderColorPicker } from "./Shared";
import ColorTag from "./ColorTag";
import moment from "moment";
import { receiveNote, sendNote } from "./HandleNote";

const NewNote = ({ setMetaTitle }, ref) => {
  const [color, setColor] = useState("primary");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const NewNoteData = useMemo(
    () => ({
      Id: receiveNote().length,
      Color: color,
      Title: title == "" ? "Untitled Text" : title,
      Body: body == "" ? "Nothing has been added!" : body,
      Date: moment(new Date()).format("Do MMM, YYYY - hh:mma"),
      Created: moment(new Date()).format("Do MMM, YYYY - hh:mma"),
    }),
    [color, title, body]
  );

  useImperativeHandle(
    ref,
    () => {
      return {
        save: () => {
          if (title == "" && body == "") {
            setTitle("Untitled Text");
            setBody("Nothing has been added!");
            sendNote(NewNoteData);
          } else {
            sendNote(NewNoteData);
          }
        },
      };
    },
    [NewNoteData]
  );

  const handleMetaTitle = (value) => {
    if (value.length == 0) {
      setMetaTitle("New Draft");
    } else {
      setMetaTitle(`${value} - Draft`);
    }
  };

  useEffect(() => {
    setMetaTitle("New Draft");
  }, []);

  return (
    <div className="container h-full ">
      <div
        className={` container flex flex-col gap-5 p-5 ${accentColorPicker(
          color
        )}`}
      >
        <input
          type="text"
          name="Title"
          id="Title"
          placeholder="Title..."
          className={`border-2 ${borderColorPicker(color)} ${bgColorPicker(
            color
          )} rounded-md titleHeading font-bold px-3 py-1 tracking-wider`}
          value={title}
          onChange={(e) => {
            handleMetaTitle(e.currentTarget.value);
            setTitle(e.currentTarget.value);
          }}
        />
        <textarea
          name="Body"
          id="Body"
          cols="30"
          rows="10"
          className={`border-2 ${borderColorPicker(color)} ${bgColorPicker(
            color
          )} rounded-md p-3`}
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
        ></textarea>
      </div>

      <div className="flex gap-2 p-5">
        <ColorTag Color="primary" setColor={(data) => setColor(data)} />
        <ColorTag Color="green" setColor={(data) => setColor(data)} />
        <ColorTag Color="red" setColor={(data) => setColor(data)} />
        <ColorTag Color="purple" setColor={(data) => setColor(data)} />
      </div>
    </div>
  );
};

export default forwardRef(NewNote);
