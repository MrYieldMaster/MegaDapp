const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: "#FFB413",
      secondary: "#811343",
    },
    fontFamily: {
      base: ["Neue Machina"],
    },
  },

  plugins: [],
};
