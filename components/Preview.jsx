import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";

import { bgColorPicker, accentColorPicker, borderColorPicker } from "./Shared";
import { receiveNote } from "./HandleNote";

const Preview = ({ Index, setIndex, setMode }) => {
  const Note = receiveNote()[Index];

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
    <div
      className={`container max-w-[90%] max-h-[90vh] flex flex-col gap-2 items-center border-[3px] ${borderColorPicker(
        Note?.Color
      )} rounded-lg p-4 ${bgColorPicker(Note?.Color)} ${accentColorPicker(
        Note?.Color
      )} mt-6`}
    >
      <div className="container flex justify-between ">
        <p
          className="titleHeading font-bold text-lg max-h-[10vh] overflow-scroll"
          title={Note?.Title}
        >
          {Note?.Title}
        </p>
        <div className="flex gap-0 items-start">
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
      </div>

      <p className=" overflow-scroll  py-1 self-stretch whitespace-pre-wrap">
        {Note?.Body}
        <pre></pre>
      </p>

      <p className="text-sm opacity-80">{Note?.Date}</p>
    </div>
  );
};

Preview.defaultProps = {
  Title: "Untitled",
  Body: "Nothing has been added here",
  Date: "DD MMM, YYYY - 00:00HH",
};

export default Preview;
