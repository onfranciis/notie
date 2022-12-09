import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useMemo,
  useState,
} from "react";
import { bgColorPicker, accentColorPicker, borderColorPicker } from "./Shared";
import ColorTag from "./ColorTag";
import FakeNotes from "./FakeNotes";
import moment from "moment";

const NewNote = ({ setMetaTitle }, ref) => {
  const [color, setColor] = useState("primary");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const date = new Date();

  const NewNoteData = useMemo(
    () => ({
      Id: FakeNotes.length + 1,
      Color: color,
      Title: title,
      Body: body,
      Date: moment(new Date()).utc().format("Do MMM, YYYY - hh:mma"),
      Created: moment(new Date()).utc().format("Do MMM, YYYY - hh:mma"),
    }),
    [color, title, body]
  );

  useImperativeHandle(
    ref,
    () => {
      return {
        save: () => {
          FakeNotes.push(NewNoteData);
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

  const handleKeyCombo = (e) => {};

  useEffect(() => {
    setMetaTitle("New Draft");
  }, []);

  return (
    <div className="container h-full " onKeyUp={(e) => console.log(e)}>
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
