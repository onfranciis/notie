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
    },
    extend: {},
  },
  plugins: [],
};
