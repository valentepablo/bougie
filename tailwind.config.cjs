/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/tw-elements/dist/js/**/*.{js, jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mulish: "'Mulish', sans-serif",
      },
    },
  },
  plugins: [require('tw-elements/dist/plugin')],
};
