/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          black: "#000000",
          navy: "#0A192F",
          lightBlue: "#64B5F6",
          slate: "#708090",
          darkGray: "#1A1A1A",
          charcoal: "#2C2C2C",
        },
      },
    },
  },
  plugins: [],
};
