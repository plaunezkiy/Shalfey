/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      container: {
        center: true,
        padding: "1.6rem",
        screens: {
          "2xl": "1348px",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"), // eslint-disable-line
    require("@tailwindcss/aspect-ratio"), // eslint-disable-line
    require("tailwind-scrollbar-hide"), // eslint-disable-line
  ],
};
