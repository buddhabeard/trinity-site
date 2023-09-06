/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: ({ colors }) => ({
        ...colors,
        teal: "#13A89E",
        darkBlue: "#073E6D",
        green: "#0D9346",
        limeGreen: "#8BC540",
      }),
    },
  },
  plugins: [],
};
