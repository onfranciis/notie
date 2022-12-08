const Card = ({ Color, Title, Body, Date }) => {
  const borderColorPicker = (value) => {
    return value == "red"
      ? "border-red"
      : value == "purple"
      ? "border-purple"
      : value == "green"
      ? "border-green"
      : "border-primary";
  };
  const bgColorPicker = (value) => {
    return value == "red"
      ? "bg-[#C0343414]"
      : value == "purple"
      ? "bg-[#AD34C014]"
      : value == "green"
      ? "bg-[#00FF3814]"
      : "bg-[#3485C014]";
  };
  return (
    <div
      className={`max-w-[29rem] max-h-[15rem] flex flex-col gap-4 items-center border-[3px] ${borderColorPicker(
        Color
      )} rounded-lg p-4 ${bgColorPicker(Color)}`}
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
