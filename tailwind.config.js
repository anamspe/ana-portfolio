/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", "./node_modules/tw-elements/js/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Mulish", "sans-serif", ...defaultTheme.fontFamily.sans],
        emoji: ['"Noto Color Emoji"', "sans-serif"],
        arima: ["Arima", "system-ui"],
        sacramento: ["Sacramento", "cursive"],
        wellfleet: ["Wellfleet", "monospace"],
      },
      colors: {
        eerie_black: {
          DEFAULT: "#1c2321",
          100: "#050706",
          200: "#0b0e0d",
          300: "#101413",
          400: "#161b1a",
          500: "#1c2321",
          600: "#43544f",
          700: "#6b867e",
          800: "#9bafaa",
          900: "#cdd7d4",
        },
        tyrian: {
          DEFAULT: "#5c0029",
          100: "#120008",
          200: "#250011",
          300: "#370019",
          400: "#490021",
          500: "#5c0029",
          600: "#af004f",
          700: "#ff0475",
          800: "#ff58a3",
          900: "#ffabd1",
        },
        cherry: {
          DEFAULT: "#edafb8",
          100: "#430f17",
          200: "#871f2e",
          300: "#ca2e45",
          400: "#de6d7e",
          500: "#edafb8",
          600: "#f1c0c7",
          700: "#f4d0d5",
          800: "#f8dfe3",
          900: "#fbeff1",
        },
        cadet: {
          DEFAULT: "#7d98a1",
          100: "#181f21",
          200: "#303e42",
          300: "#485d63",
          400: "#607b85",
          500: "#7d98a1",
          600: "#97acb4",
          700: "#b1c1c6",
          800: "#cbd6d9",
          900: "#e5eaec",
        },
        paynes: {
          DEFAULT: "#5e6572",
          100: "#131417",
          200: "#26292e",
          300: "#383d45",
          400: "#4b515c",
          500: "#5e6572",
          600: "#7b8393",
          700: "#9ca2ae",
          800: "#bdc1c9",
          900: "#dee0e4",
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss", require("tw-elements/plugin.cjs")],
  darkMode: "class"
};
