/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0f0516",
        secondary: "#aaa6c3",
        tertiary: "#1e1030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #281e35",
      },
      screens: {
        xs: "450px",
      },

    },
  },
  plugins: [],
};