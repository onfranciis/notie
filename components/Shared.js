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
    ? "bg-[#C0343428]"
    : value == "purple"
    ? "bg-[#AD34C028]"
    : value == "green"
    ? "bg-[#00FF3828]"
    : "bg-[#3485C028]";
};

const accentColorPicker = (value) => {
  return value == "red"
    ? "accent-red"
    : value == "purple"
    ? "accent-purple"
    : value == "green"
    ? "accent-green"
    : "accent-primary";
};

const textColorPicker = (value) => {
  return value == "red"
    ? "text-red"
    : value == "purple"
    ? "text-purple"
    : value == "green"
    ? "text-green"
    : "text-primary";
};

module.exports = {
  borderColorPicker,
  bgColorPicker,
  accentColorPicker,
  textColorPicker,
};
