/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#3485C0",
      secondary: "#0E3856",
      tertiary: "white",
      primary2: "#226ea4",
      green: "#009621",
      purple: "#AD34C0",
      red: "#C03434",
    },
    extend: {},
  },
  plugins: [],
};
