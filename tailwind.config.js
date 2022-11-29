/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

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
      colors: {
        primary: colors.sky,
      },
    },
  },
  plugins: [],
}
