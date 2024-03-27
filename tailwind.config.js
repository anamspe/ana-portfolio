/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        emoji: ['"Noto Color Emoji"', 'sans-serif'],
        arima: ['Arima', 'system-ui'],
        mulish: ['Mulish', 'sans-serif']
      }
    },
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
