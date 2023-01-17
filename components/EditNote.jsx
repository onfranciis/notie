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
import { receiveNote, sendNote, updateNote } from "./HandleNote";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

const EditNote = ({ setMetaTitle, Index, setIndex }, ref) => {
  const [IndexUpdate, setIndexUpdate] = useState(Index);
  const [newNoteDataID, setNewNoteDataID] = useState(
    receiveNote()[IndexUpdate].Id
  );
  const [color, setColor] = useState(receiveNote()[IndexUpdate].Color);
  const [title, setTitle] = useState(receiveNote()[IndexUpdate].Title);
  const [body, setBody] = useState(receiveNote()[IndexUpdate].Color);

  const NewNoteData = useMemo(
    () => ({
      Id: newNoteDataID,
      Color: color,
      Title: title == "" ? "Untitled Text" : title,
      Body: body == "" ? "Nothing has been added!" : body,
      Date: moment(new Date()).format("Do MMM, YYYY - hh:mma"),
      Created: receiveNote()[IndexUpdate].Created,
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
            updateNote(NewNoteData, newNoteDataID);
          } else {
            updateNote(NewNoteData, newNoteDataID);
          }
        },
      };
    },
    [NewNoteData]
  );

  const handleMetaTitle = (value) => {
    if (value.length == 0) {
      setMetaTitle(title);
    } else {
      setMetaTitle(`${value} - Draft`);
    }
  };

  useEffect(() => {
    setMetaTitle(title);
  }, []);

  useEffect(() => {
    setNewNoteDataID(receiveNote()[Index].Id);
    setColor(receiveNote()[Index].Color);
    setTitle(receiveNote()[Index].Title);
    setBody(receiveNote()[Index].Body);
  }, [Index]);

  const handleNavigation = (value) => {
    if (value == "Next") {
      if (Index < receiveNote().length - 1) {
        setIndex(Index + 1);
      }
    } else {
      if (Index > 0) {
        setIndex(Index - 1);
      }
    }
  };

  return (
    <div className="container h-full ">
      <div
        className={` container flex flex-col gap-5 p-5 ${accentColorPicker(
          color
        )}`}
      >
        <div className="flex gap-0 items-center justify-end w-full ">
          <div
            className="flex justify-center items-center pl-2 rounded-sm text-primary hover:bg-primary hover:text-tertiary"
            onClick={() => handleNavigation("Prev")}
          >
            <MdArrowBackIos size="1.5em" title="Previous" className="" />
          </div>

          <div
            className="flex justify-center items-center pr-1 rounded-sm text-primary hover:bg-primary hover:text-tertiary"
            onClick={() => handleNavigation("Next")}
          >
            <MdArrowForwardIos size="1.5em" title="Next" className="" />
          </div>
        </div>
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

export default forwardRef(EditNote);
