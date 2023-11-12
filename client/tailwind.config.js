/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF0E3",
          100: "#FFD2AD",
          200: "#FFB57C",
          300: "#F99A4F",
          400: "#e98025",
          500: "#d46800",
          600: "#bb5300",
          700: "#a04100",
          800: "#843200",
          900: "#662600",
        },
        secondary: {
          50: "#f3f3f3",
          100: "#dddddd",
          200: "#c6c6c6",
          300: "#b0b0b0",
          400: "#9b9b9b",
          500: "#868686",
          600: "#727272",
          700: "#5e5e5e",
          800: "#4b4b4b",
          900: "#393939",
        },
      },
    },
  },
  plugins: [],
};
