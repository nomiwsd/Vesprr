/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primarycl: "#8E51D0",
        primarybg: "#F5F7FA",
        secondarybg: "#E9E1F18C",
        primarytext: "#4D4D4D",
        secondarytext: "#717171",
        secondarylinks: "#9D76C7",
        primarylinks: "#18191F",
        footerlinks: "#3B3C3E",
      },
      fontFamily: {
        dmsans:'DM Sans',
      },
    },
  },
  plugins: [],
};
