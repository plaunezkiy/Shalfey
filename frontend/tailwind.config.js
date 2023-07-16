/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    fontFamily: {
      sans: ["var(--font-hagrid)"],
    },
    extend: {
      colors: {
        primary: {
          main: "#007b39",
          accent: "#679436",
          white: "#fffcf2",
          dark: "#05668D",
          red: "#f15025",
        },
        secondary: {
          dark: "#132A13",
          dimmed: "#31572C",
          medium: "#4F772D",
          semi: "#90A955",
          light: "#ECF39E",
        },
      },
      keyframes: {
        pingOnce: {
          "50%": { transform: "scale(1.3)" },
          100: { transform: "scale(1)" },
        },
      },
      animation: {
        pingOnce: "pingOnce 0.5s cubic-bezier(0, 0, 0.2, 1)",
      },
      container: {
        center: true,
        padding: "1.6rem",
        screens: {
          "2xl": "1348px",
        },
      },
      boxShadow: {
        modal: "0px 0px 5px 5px rgba(0,0,0,0.25)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // eslint-disable-line
    require("@tailwindcss/aspect-ratio"), // eslint-disable-line
    require("@tailwindcss/forms"), // eslint-disable-line
    require("tailwind-scrollbar-hide"), // eslint-disable-line
  ],
};
