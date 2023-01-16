/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        avant: ["Avant"],
        avantBold: ["AvantBold"],
        avenir: ["Avenir"],
      },
      colors: {
        digifist: "#666666",
        radio1: "#99C3CC",
        radio2: "#CC9999",
        radio3: "#CB99CC",
        radio4: "#BCD9B2",
      },
      space: {
        hdigi: 1,
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
