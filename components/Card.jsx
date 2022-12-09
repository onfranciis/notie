import { bgColorPicker, accentColorPicker, borderColorPicker } from "./Shared";

const Card = ({ Color, Title, Body, Date, ID, preview }) => {
  return (
    <div
      className={`max-w-[29rem] max-h-[15rem] flex flex-col gap-4 items-center border-[3px] ${borderColorPicker(
        Color
      )} rounded-lg p-4 ${bgColorPicker(Color)}`}
      onClick={() => preview(ID - 1)}
    >
      <p className="titleHeading font-bold text-lg">{Title}</p>
      <p className="textCardEllipse max-h-[15rem]">{Body}</p>
      <p className="text-sm opacity-80">{Date}</p>
    </div>
  );
};

Card.defaultProps = {
  Title: "Untitled",
  Body: "Nothing has been added here",
  Date: "DD MMM, YYYY - 00:00HH",
};

export default Card;
