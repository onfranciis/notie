import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import FakeNotes from "./FakeNotes";
import { bgColorPicker, accentColorPicker, borderColorPicker } from "./Shared";

const Preview = ({ Color, Title, Body, Date, Next, Prev, ID }) => {
  const handleNavigation = (value) => {
    if (value == "Next") {
      if (ID < FakeNotes.length - 1) {
        Next();
      }
    } else {
      if (ID > 0) {
        Prev();
      }
    }
  };

  return (
    <div
      className={`container flex flex-col gap-2 items-center border-[3px] ${borderColorPicker(
        Color
      )} rounded-lg p-4 ${bgColorPicker(Color)} ${accentColorPicker(
        Color
      )} mt-6`}
    >
      <div className="container flex justify-between ">
        <p className="titleHeading font-bold text-lg" title={Title}>
          {Title}
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

      <p className="max-h-[50vh] overflow-scroll py-1">{Body}</p>

      <p className="text-sm opacity-80">{Date}</p>
    </div>
  );
};

Preview.defaultProps = {
  Title: "Untitled",
  Body: "Nothing has been added here",
  Date: "DD MMM, YYYY - 00:00HH",
};

export default Preview;
