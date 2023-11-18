/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Libre Franklin", "sans-serif"],
      },
      colors: {
        white: "#fff",
        "blue-primary": "#4f7df3",
        "pale-blue": "#c2d3ff",
        "light-red": "#ff5263",
        "gray-neutral": "#969696",
        "very-dark-blue": "#151f29",
      },
      fontSize: {
        xs: "0.8rem",
        base: "0.9rem",
        xl: "1.05rem",
        "2xl": "1.563rem",
        "3xl": "1.953rem",
        "4xl": "2.441rem",
        "5xl": "3.052rem",
      },
    },
  },
  plugins: [],
};
