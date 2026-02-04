/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#DFDCD5",
        white: "#FFFFFF",
      },
      fontFamily: {
        body: ['"Nunito Sans"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
