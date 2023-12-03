/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "rgb(51 65 85)",
        blue: "rgb(0 171 228)",
        blue1: "rgb(37 99 235)",
        grey: "rgb(30, 55, 90)",
        grey1: "rgb(107 114 128)",
        grey2: "rgb(31 41 55)",
        grey3: "#F5F7F8",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
