import { bgColorPicker } from "./Shared";

const ColorTag = ({ Color, setColor }) => {
  return (
    <div
      className={`h-10 w-10 ${bgColorPicker(
        Color
      )} rounded-[100%] border-[1px] `}
      onClick={() => setColor(Color)}
    ></div>
  );
};

ColorTag.defaultProps = {
  Color: "primary",
};

export default ColorTag;
