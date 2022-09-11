/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./src/**/*.js"],
  darkMode: "class",

  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "575px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1200px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1400px",
      // => @media (min-width: 1400px) { ... }
    },
    extend: {
      colors: {
        black: "#000",
        white: "#fff",
        primary: "",
        secondary: "",
        stroke: "",
        light: "",
        dark: "",
        heading: "",
        body: "",
      },

      screens: {
        xs: "450px",
        "3xl": "1500px",
      },
    },
  },
  plugins: [],

  prefix: "ud-",
};
