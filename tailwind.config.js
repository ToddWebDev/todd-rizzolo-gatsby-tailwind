/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")
const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    spacing: {
      0: "0px",
      px: "1px",
      0.5: "2px",
      1: "4px",
      1.5: "6px",
      2: "8px",
      2.5: "10px",
      3: "12px",
      3.5: "14px",
      4: "16px",
      5: "20px",
      6: "24px",
      7: "28px",
      8: "32px",
      9: "40px",
      10: "48px",
      11: "56px",
      12: "64px",
      14: "80px",
      16: "96px",
      18: "112px",
      20: "128px",
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
        catamaran: ["Catamaran", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: colors.rose,
        base: {
          "00": "#f5f8fa",
          50: "#dce5eb",
          100: "#c4d3dc",
          300: "#3f7893",
          500: "#164c69",
          700: "#13435C",
          900: "#0d2d3e",
        },
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(295deg, rgba(245, 248, 250, 0) 0%, rgba(245, 248, 250, 0.99) 50%, rgba(245, 248, 250, 1) 100%), url('../images/pattern-randomized.svg')",
        "hero-image":
          "linear-gradient(180deg,rgba(22,76,105,.9),rgba(13,45,62,.9)), url('../images/ministrygrid-mockup.jpg')",
      },
    },
  },
  plugins: [],
}
