/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Cambo", "serif"], // Replace default sans font with Cambo
      },
    },
  }, // <-- Add this closing bracket for the `theme` object
  plugins: [],
};
