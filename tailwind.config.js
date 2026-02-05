/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        white: "#FFFFFF",
        accent: "#C8B590",
        "accent-dark": "#B5A27D",
        neutral: {
          50: "#FAFAFA",
          100: "#F5F5F5",
          200: "#EBEBEB",
          300: "#D4D4D4",
          400: "#A3A3A3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Georgia", "serif"],
        body: ['"Montserrat"', "system-ui", "sans-serif"],
        script: ['"Great Vibes"', "cursive"],
      },
    },
  },
  plugins: [],
};
