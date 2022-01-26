/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require("tailwindcss/colors")

module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      ...colors,
      blue: {
        50: "#D0E8FF",
        100: "#BBDEFF",
        200: "#92CBFF",
        300: "#6AB7FF",
        400: "#41A4FF",
        500: "#1890FF",
        600: "#0074DF",
        700: "#0057A7",
        800: "#003A6F",
        900: "#001C37",
      },
    },
  },
  plugins: [],
}
